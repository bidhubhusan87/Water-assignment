import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';


const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
    pathMatch: 'full',
    data: { type: 'one' }
  },
  {
    path: 'pageone',
    component: CardsComponent,
    data: { type: 'one' }
  },
  {
    path: 'pagetwo',
    component: CardsComponent,
    data: { type: 'two' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
