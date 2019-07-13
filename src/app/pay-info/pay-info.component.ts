import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-info',
  templateUrl: './pay-info.component.html',
  styleUrls: ['./pay-info.component.scss']
})
export class PayInfoComponent implements OnInit {
  paymentypes: string[] = ['Credit Card', 'PayPal'];
  panelOpenState = false;
  toAddClass = false;
  openPanel = -1;


  constructor() { }

  ngOnInit() {
  }
  addClass(type, i) {
    if (type === this.paymentypes[i]) {
      console.log(type, i);
      this.toAddClass = true;
      this.openPanel = i;
      console.log(this.openPanel);
    }
}
}
