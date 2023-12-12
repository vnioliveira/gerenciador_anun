import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserServices } from 'src/services/User.services';
import { TableServices } from 'src/services/tables.services';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit{

  @Output() contaEvent = new EventEmitter<void>();

  email: string = "";
  senha: string = "";
  oldEmail: string = "";
  id: number = 0;

  constructor(private userService: UserServices, private tableService: TableServices) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.id = user.id;
    this.email = user.email;
    this.senha = user.senha;
    this.oldEmail = user.email;
  }


  salvar(){

    if(this.email == "" || this.senha == ""){
      alert("Preencha todos os campos!");
      return;
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    user.email = this.email;
    user.senha = this.senha;

    this.userService.setUser(this.id, this.email, this.senha).subscribe({
      next: (data) => {
        localStorage.setItem('user', JSON.stringify(user));

        console.log(user);
        

        this.tableService.atualizarPessoa(user.id, user.email).subscribe({
          next: (data) => {
            alert("Dados alterados com sucesso!");
            this.contaEvent.emit();
          },
          error: (error) => {
            console.log(error);
          }
        });
        console.log(data);
      },
      error: (error) => {
        alert("Erro ao alterar dados!");
        console.log(error);
      }
    })
  }

}
