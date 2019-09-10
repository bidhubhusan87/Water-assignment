import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { cardData } from '../data.config';

@Injectable({
  providedIn: 'root'
})
export class CardDataService implements InMemoryDbService {
  constructor() { }
  offersData = cardData;

  createDb() {
    let offersData = cardData;
    return {offersData};
  }
}
