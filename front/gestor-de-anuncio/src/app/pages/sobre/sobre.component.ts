import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  constructor(
    private router: Router
    ) { }

    voltarClick() {
    this.router.navigate(['/home']);
  }

}
