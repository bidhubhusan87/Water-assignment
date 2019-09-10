import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CardDataService } from './services/card-data.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component';
import { 
  MatGridListModule, 
  MatTabsModule
 } from '@angular/material';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(CardDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
