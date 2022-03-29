import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofbookingdisputesComponent } from './listofbookingdisputes/listofbookingdisputes.component';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const disputeRoutes:Routes=[
  {path:"",component:ListofbookingdisputesComponent}
]



@NgModule({
  declarations: [
    ListofbookingdisputesComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild(disputeRoutes)
  ]
})
export class BookingDisputeModule { }
