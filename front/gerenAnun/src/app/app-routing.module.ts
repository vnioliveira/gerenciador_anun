import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ContateNosComponent } from './components/contate-nos/contate-nos.component';

const routes: Routes = [
  {
  path: 'quem-somos',
  component:QuemSomosComponent
  },
  {
    path: 'contato',
    component:ContateNosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
