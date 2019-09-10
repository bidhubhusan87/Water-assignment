import { TestBed } from '@angular/core/testing';

import { GetCardDetailsService } from './get-card-details.service';

describe('GetCardDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCardDetailsService = TestBed.get(GetCardDetailsService);
    expect(service).toBeTruthy();
  });
});
