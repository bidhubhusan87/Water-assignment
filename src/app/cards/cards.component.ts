import { Component, OnInit } from '@angular/core';
import { GetCardDetailsService } from '../get-card-details.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public GetCardDetailsService: GetCardDetailsService) { }
  viewType: string;
  allCardData: any;
  cardPageData: any;
  iscardbought: boolean;
  isCardBoughtService: boolean;

  ngOnInit() {
    this.viewType = this.route.snapshot.data.type
    this.isCardBoughtService = this.GetCardDetailsService.isBoughtCard;
    this.getCardDetails();
    
  }
  getCardDetails() {
    this.GetCardDetailsService.getCardDetails().subscribe((data: Array<Object>) => {
      this.allCardData = data;
      this.cardPageData = this.viewType == 'one' ? data.filter(data => data['category'] == 'tab1') : data.filter(data => data['category'] == 'tab2');
      
    })
    
  }
  selectCard(cardData, isBought){ 
    if (isBought) {
      this.iscardbought = true;
      this.GetCardDetailsService.isBoughtCard = true;
      this.isCardBoughtService = this.GetCardDetailsService.isBoughtCard;
    } else {
      this.iscardbought = false;
      this.GetCardDetailsService.isBoughtCard = false;
      this.isCardBoughtService = this.GetCardDetailsService.isBoughtCard;
    }
    if (isBought) {
      this.GetCardDetailsService.getSelectedCardDetails().subscribe((selectedDetails: any) => {
        if (selectedDetails.length) {
          const getSelected = forkJoin(...selectedDetails.map(selectedCard => {
            selectedDetails.selected = false;
            return this.GetCardDetailsService.updateCardDetails(selectedCard)
          }));
          getSelected.subscribe(res => {
            cardData.selected = true
            this.GetCardDetailsService.updateCardDetails(cardData).subscribe((data) => {
              this.getCardDetails();
            })
          });
        } else {
          cardData.selected = true
          this.GetCardDetailsService.updateCardDetails(cardData).subscribe((data) => {
            this.getCardDetails();
          })
        }
      })
    } else {
      this.GetCardDetailsService.getSelectedCardDetails().subscribe((selectedDetails: any) => {
        if (selectedDetails.length) {
          const allObs = forkJoin(...selectedDetails.map(selectedCard => {

            selectedCard.selected = false;
            return this.GetCardDetailsService.updateCardDetails(selectedCard)
          }));
          allObs.subscribe(res => {
            this.getCardDetails();
          });
        }
      });

    }
    
  }
  
  
  
}
