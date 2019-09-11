import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetCardDetailsService } from './get-card-details.service';
import { cardModel } from '../models/data.model';
import { CardDataService } from '../services/card-data.service';


describe('GetCardDetailsService', () => {

  let DummyOffer: cardModel;
  let DummyService: GetCardDetailsService;
  let DummyHTTP: HttpTestingController;


  DummyOffer = {
    id: '1',
    type: 'STARTER',
    price: 1,
    detail: 'Starter features for your business to grow.',
    selected: false,
    category: 'proffessional'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    DummyService = TestBed.get(GetCardDetailsService);
  });


  it('should be created', () => {
    const service: GetCardDetailsService = TestBed.get(GetCardDetailsService);
    expect(service).toBeTruthy();
  });

  it('should return an array object', () =>{
    DummyService.getCardDetails().subscribe((cardData: cardModel[]) => {
      console.log(cardData);
      expect(cardData.length).toBe(4);
      expect(cardModel).toEqual(DummyOffer);
      let updateRequest = DummyHTTP.expectOne(`${DummyService.API_URL}/offersData`);
      expect(updateRequest.request.method).toBe('GET');
      updateRequest.flush(DummyOffer);
    });
  })
});
