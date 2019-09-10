import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCardDetailsService {


  API_URL: string = "http://localhost:4200/api/";
  isBoughtCard: boolean = false;

  constructor(private httpClient: HttpClient) { }

  /* get Card Details */
  public getCardDetails() {
    return this.httpClient.get(this.API_URL + 'offersData');
  }
  public getSelectedCardDetails() {
    return this.httpClient.get(`${this.API_URL + 'offersData'}?selected=^true`);
  }
  public updateCardDetails(post) {
    return this.httpClient.put(`${this.API_URL + 'offersData'}/${post.id}`, post)
  }
}
