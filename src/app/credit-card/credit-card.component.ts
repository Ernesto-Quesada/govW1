import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CreditCard } from '../model/credit-card.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  public months: number[] = [];
  public days: number[] = [];
  public creditCard: CreditCard = { cardNumber: '', imageCard: '', day: 1, month: 1, cvv: 111, personName: '' };
  public cardUrl: string[] = [];

  constructor() { }

  ngOnInit() {

    this.creditCard.imageCard = '../../assets/images/08-tabletfunneltemplates-payment-dark-blue.png';

    this.cardUrl.push('../../assets/images/08-tabletfunneltemplates-payment-dark-blue.png');
    this.cardUrl.push('../../assets/images/04-desktoppaymentsamplescc3-dark-blue-3.png');
    this.cardUrl.push('../../assets/images/04-desktoppaymentsamplescc3-dark-blue.png');

    for (let index = 1; index < 13; index++) {
      this.months.push(index);
    }

    for (let index = 1; index < 32; index++) {
      this.days.push(index);
    }
  }

  checkCard() {
    if (this.creditCard.cardNumber == null) { return; }
    if (this.creditCard.cardNumber.toString().includes('52')) {
      this.creditCard.imageCard = this.cardUrl[1];
    } else if (this.creditCard.cardNumber.toString().includes('42')) {
      this.creditCard.imageCard = this.cardUrl[2];
    } else {
        this.creditCard.imageCard = this.cardUrl[0];
      }

  }

}

