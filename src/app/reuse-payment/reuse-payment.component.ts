import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reuse-payment',
  templateUrl: './reuse-payment.component.html',
  styleUrls: ['./reuse-payment.component.scss']
})
export class ReusePaymentComponent implements OnInit {
  @Input() paymentypes;
  @Input() test ;
  @Input() test2

  

  constructor() { }

  ngOnInit() {
  }

}
