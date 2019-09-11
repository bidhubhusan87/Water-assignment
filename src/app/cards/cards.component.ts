import { Component, OnInit } from '@angular/core';
import { cardModel } from '../models/data.model';
import { GetCardDetailsService } from '../services/get-card-details.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public GetCardDetailsService: GetCardDetailsService) { }
  /* variable declaration */
  viewType: string;
  cardPageData: Array<cardModel>;
  isCardBoughtService: boolean;

  ngOnInit() {
    this.viewType = this.route.snapshot.data.content
    this.getCardDetails();
  }
  getCardDetails() {
    this.GetCardDetailsService.getCardDetails().subscribe((data: Array<cardModel>) => {
      this.getDataStatus(this.GetCardDetailsService.isBoughtCard);
      this.cardPageData = this.viewType == 'one' ? data.filter(data => data['category'] == 'strater') : data.filter(data => data['category'] == 'proffessional');
    })
  }
  selectYouCard(cardModel : cardModel){
    cardModel.selected = true;  
    this.updateStatus(true);
    this.updateCardData(cardModel);
  }
  updateCardData(cardModel : cardModel) {
    this.GetCardDetailsService.updateCardDetails(cardModel).subscribe((data) => {
      this.getCardDetails();
    })
  }
  deselectCards(cardModel: cardModel)  {
    cardModel.selected = false;
    this.updateStatus(false);
    this.updateCardData(cardModel);
  }
  updateStatus(status: boolean){
    this.GetCardDetailsService.isBoughtCard = status;
    this.isCardBoughtService = this.GetCardDetailsService.isBoughtCard;
  }
  getDataStatus(status: boolean){
    this.isCardBoughtService = status;
  }
}
