import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetCardDetailsService } from '../services/get-card-details.service';
import { cardModel } from '../models/data.model';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let propertyAfterResponse;
  let propertExpectedAfterRespnise;
  let fixture: ComponentFixture<CardsComponent>;
  let DummyService: GetCardDetailsService;
  let DummyOffer: cardModel;
  

  beforeEach(async((DummyOffer) => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      declarations: [ CardsComponent ],
      providers: [GetCardDetailsService]
    })
    .compileComponents();
    DummyOffer = {
      id: '1',
      type: 'STARTER',
      price: 1,
      detail: 'Starter features for your business to grow.',
      selected: false,
      category: 'tab1'
    };
    DummyService = TestBed.get(GetCardDetailsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getOffers should return an array with Offer objects', async () => {
    DummyService.getCardDetails().subscribe(value => {
      propertExpectedAfterRespnise = Object.getOwnPropertyNames(value[0]);
      propertyAfterResponse = Object.getOwnPropertyNames(DummyOffer);
      expect(propertExpectedAfterRespnise).toEqual(propertyAfterResponse);
    });
  });

  it('should have getCardDetails', () => {
    expect(component.getCardDetails).toBeTruthy();
  });
});
