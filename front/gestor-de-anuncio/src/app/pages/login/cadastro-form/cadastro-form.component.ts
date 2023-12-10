import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/domains/User';
import { UserServices } from 'src/services/User.services';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent {

  invalidUser: boolean = false;
  invalidPass: boolean = false;

  userError: string = 'Email inválido';
  passwordError: string = 'Senha inválida';

  user: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserServices){}

  create() {
    this.invalidUser = this.user === '';
    this.invalidPass = this.password === '';

    if (this.invalidUser || this.invalidPass) return;
    
    console.log(this.user, this.password);
    
    this.userService.cadastro(this.user, this.password).subscribe({
      next: (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/home']);
      },
      error: () => {
        this.invalidUser = true;
        this.invalidPass = true;
      }
    })
  }

}
