import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Anuncio } from 'src/domains/Anuncio';
import { UserServices } from 'src/services/User.services';
import { TableServices } from 'src/services/tables.services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    user: any;
    anuncios: Anuncio[] = [];
    pessoas: any[] = [];
    ano!: Date| undefined;
    filtroAno: string = '';
    filtroModelo: string = '';

    //bools
    displayAnuncio: boolean = false;
    displayAnuncioEdit: boolean = false;
    displayConta: boolean = false;

    selectedAnuncio: Anuncio | undefined;

    items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    constructor(
        private router: Router,
        private tableService: TableServices,
        private userService: UserServices
    ) {}

    ngOnInit(): void {
        this.items = [
            { label: 'Novo Anúncio', icon: 'pi pi-fw pi-calendar' },
            { label: 'Sobre nós', icon: 'pi pi-fw pi-info' },
            { label: 'Conta', icon: 'pi pi-fw pi-user' },
            { label: 'Contate-nos', icon: 'pi pi-fw pi-envelope' },
            { label: 'Sair', icon: 'pi pi-fw pi-sign-out' },
        ];

        this.activeItem = this.items[0];
        this.user = JSON.parse(localStorage.getItem('user') || '{}');

        this.anunciosUpdate();

        this.pessoasUpdate();
    }

    anunciosUpdate() {
        this.tableService.getAnuncios().subscribe((data: any[]) => {
            this.anuncios = data;
        });
    }

    pessoasUpdate() {
        this.userService.getUsers().subscribe((data: any[]) => {
            this.pessoas = data;
        });
    }

    menuClick(event: any) {
        if (event === 'Sair') {
            localStorage.removeItem('user');
            window.location.reload();
        } else if (event === 'Contate-nos') {
            this.router.navigate(['/contato']);
        } else if (event === 'Sobre nós') {
            this.router.navigate(['/sobre']);
        } else if (event === 'Conta') {
            this.displayConta = true;
        } else if (event === 'Novo Anúncio') {
            this.displayAnuncio = true;
        }
    }

    AnuncioClose(event: any) {
        this.displayAnuncio = false;
        this.anunciosUpdate();
    }

    ContaClose(event: any) {
        this.displayConta = false;
        this.pessoasUpdate();
        this.anunciosUpdate();
    }

    deleteAnuncio(id: string) {

        this.tableService.deleteAnuncio(id).subscribe({
            next: (data) => {
                alert('Anúncio deletado com sucesso!');
                this.anunciosUpdate();
            },
            error: (error) => {
                alert('Erro ao deletar anúncio!');
            },
        });
    }

    deletePessoa(id: number) {
        this.userService.deleteUser(id).subscribe({
            next: (data) => {
                console.log(data);
                alert('Usuário deletado com sucesso!');
                this.pessoasUpdate();
            },
            error: (error) => {
                console.log(error);
                alert('Erro ao deletar usuário!');
            },
        });
    }

    buscarPorAno() {
        if(!this.ano){
            this.anunciosUpdate();
            return;
        }
        
        this.filtroAno = this.ano.getFullYear().toString();
        this.tableService.buscarPorAno(this.filtroAno).subscribe(
            (anuncios) => {
                this.anuncios = anuncios;
            },
            (error) => {
                console.error('Erro ao buscar por ano:', error);
            }
        );
    }

    buscarPorModelo() {
        if(this.filtroModelo === ''){
            this.anunciosUpdate();
            return;
        }
        this.tableService.buscarPorModelo(this.filtroModelo).subscribe(
            (anuncios) => {
                this.anuncios = anuncios;
            },
            (error) => {
                console.error('Erro ao buscar por modelo:', error);
            }
        );
    }

    clear() {
        this.ano = undefined;
        this.filtroAno = '';
        this.filtroModelo = '';
        this.anunciosUpdate();
    }

    navigateContate() {
        this.router.navigate(['/contato']);
    }
}
