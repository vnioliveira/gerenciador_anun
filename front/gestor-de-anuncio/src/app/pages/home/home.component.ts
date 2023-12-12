import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Anuncio } from 'src/domains/Anuncio';
import { User } from 'src/domains/User';
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
    ano: Date = new Date();
    filtroAno: string = '';
    filtroModelo: string = '';

    //bools
    displayAnuncio: boolean = false;
    displayAnuncioEdit: boolean = false;
    displayPessoa: boolean = false;
    displayUser: boolean = false;
    displayProfile: boolean = false;

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
        } else if (event === 'Contate-nos') {
            this.router.navigate(['/contato']);
        } else if (event === 'Sobre nós') {
            this.router.navigate(['/sobre']);
        } else if (event === 'Conta') {
            this.router.navigate(['/conta']);
        } else if (event === 'Novo Anúncio') {
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
            },
        });
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
            },
        });
    }

    buscarPorAno() {
        this.filtroAno = this.ano.getFullYear().toString();
        console.log(this.filtroAno);

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
        this.ano = new Date();
        this.filtroAno = '';
        this.filtroModelo = '';
    }

    navigateContate() {
        this.router.navigate(['/contato']);
    }
}
