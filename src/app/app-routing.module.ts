import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';


const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
    pathMatch: 'full',
    data: { content: 'one' }
  },
  {
    path: 'pageone',
    component: CardsComponent,
    data: { content: 'one' }
  },
  {
    path: 'pagetwo',
    component: CardsComponent,
    data: { content: 'two' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
