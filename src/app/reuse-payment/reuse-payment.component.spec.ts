import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusePaymentComponent } from './reuse-payment.component';

describe('ReusePaymentComponent', () => {
  let component: ReusePaymentComponent;
  let fixture: ComponentFixture<ReusePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
