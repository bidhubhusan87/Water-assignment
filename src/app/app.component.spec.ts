import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { GetCardDetailsService } from './services/get-card-details.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material';
import { HeaderComponent } from './header/header.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule

      ],
      declarations: [ AppComponent,  HeaderComponent, CardsComponent ],
      providers: [GetCardDetailsService],
    })
  }))
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
