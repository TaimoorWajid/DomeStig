import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofpaymentoptionsComponent } from './listofpaymentoptions/listofpaymentoptions.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { PaymentoptionComponent } from './paymentoption/paymentoption.component';

const paymentroutes:Routes=[
  {path:"",component:ListofpaymentoptionsComponent},
  {path:"paymentoption",component:PaymentoptionComponent}
]


@NgModule({
  declarations: [
    ListofpaymentoptionsComponent,
    PaymentoptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild(paymentroutes)
  ]
})
export class PaymentOptionsModule { }
