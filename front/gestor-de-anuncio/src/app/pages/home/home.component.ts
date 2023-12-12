import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Anuncio } from 'src/domains/Anuncio';
import { User } from 'src/domains/User';
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

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;


  constructor(
    private tableService: TableServices,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.items = [
      { label: 'About Us', icon: 'pi pi-fw pi-calendar' },
      { label: 'profile', icon: 'pi pi-fw pi-user' },
      { label: 'Logout', icon: 'pi pi-fw pi-exit' }
  ];

  this.activeItem = this.items[0];

    console.log("oi");

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    
    this.tableService.getAnuncios().subscribe((data: any[]) => {
      this.anuncios = data;
      console.log(this.anuncios);
      
    });
  }

  menuClick(event: any) {
    if (event === 'Logout') {
      localStorage.removeItem('user');
      window.location.reload();
    }
    if (event === 'About Us') {
      this.router.navigate(['/sobre']);
    }
  }
}
