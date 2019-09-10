import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetCardDetailsService } from './get-card-details.service';

describe('GetCardDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));


  it('should be created', () => {
    const service: GetCardDetailsService = TestBed.get(GetCardDetailsService);
    expect(service).toBeTruthy();
  });
});
