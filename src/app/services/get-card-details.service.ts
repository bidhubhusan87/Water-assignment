import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetCardDetailsService {

  isBoughtCard: boolean = false;
  /* API_URL from environment */
  API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  /* get Card Details */
  public getCardDetails() {
    return this.httpClient.get(this.API_URL + 'offersData');
  }
  /* Get Selected Card Details */
  public getSelectedCardDetails() {
    return this.httpClient.get(`${this.API_URL + 'offersData'}?selected=^true`);
  }
  /* To Updated Card Details */
  public updateCardDetails(post) {
    return this.httpClient.put(`${this.API_URL + 'offersData'}/${post.id}`, post);
  }
}
