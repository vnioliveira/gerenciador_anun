import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Anuncio } from 'src/domains/Anuncio';
import { User } from 'src/domains/User';
import { UserServices } from 'src/services/User.services';
import { TableServices } from 'src/services/tables.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  user: any;
  anuncios: Anuncio[] = [];
  pessoas: any[] = [];


  //bools
  displayAnuncio: boolean = false;
  displayAnuncioEdit: boolean = false;
  displayPessoa: boolean = false;
  displayUser: boolean = false;
  displayProfile: boolean = false;

  selectedAnuncio: Anuncio | undefined;

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;


  constructor(private router: Router, private tableService: TableServices, private userService: UserServices) { }

  ngOnInit(): void {

    this.items = [
      { label: 'Novo Anúncio', icon: 'pi pi-fw pi-calendar' },
      { label: 'Sobre nós', icon: 'pi pi-fw pi-info' },
      { label: 'Conta', icon: 'pi pi-fw pi-user' },
      { label: 'Sair', icon: 'pi pi-fw pi-exit' }
  ];

  this.activeItem = this.items[0];
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    
    this.anunciosUpdate();

    this.pessoasUpdate();
  }

  anunciosUpdate() {
    this.tableService.getAnuncios().subscribe((data: any[]) => {
      this.anuncios = data;
      console.log(this.anuncios);
    });
  }

  pessoasUpdate() {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.pessoas = data;
      console.log(this.pessoas);
    });
  }

  menuClick(event: any) {
    if (event === 'Sair') {
      localStorage.removeItem('user');
      window.location.reload();
    }
    if (event === 'About Us') {
      this.router.navigate(['/sobre']);
    }
    else if (event === 'Conta') {
      this.router.navigate(['/conta']);
    }
    else if (event === 'Novo Anúncio') {
      this.displayAnuncio = true;
    }
  }

  AnuncioClose(event: any) {
    this.displayAnuncio = false;
    this.anunciosUpdate();
  }

  deleteAnuncio(id: string) {
    console.log(id);
    
    this.tableService.deleteAnuncio(id).subscribe({
      next: (data) => {
        console.log(data);
        alert('Anúncio deletado com sucesso!');
        this.anunciosUpdate();
      },
      error: (error) => {
        console.log(error);
        alert('Erro ao deletar anúncio!');
      }
    })
  }
  
  deletePessoa(id: number) {
    console.log(id);
    
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
        alert('Usuário deletado com sucesso!');
        this.pessoasUpdate();
      },
      error: (error) => {
        console.log(error);
        alert('Erro ao deletar usuário!');
      }
    })
  }
}
