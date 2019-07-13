import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayInfoComponent } from './pay-info/pay-info.component';
import { LayoutComponent } from './layout/layout.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FormsModule } from '@angular/forms';
import { PayPalComponent } from './pay-pal/pay-pal.component';

@NgModule({
  declarations: [
    AppComponent,
    PayInfoComponent,
    LayoutComponent,
    CreditCardComponent,
    PayPalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
