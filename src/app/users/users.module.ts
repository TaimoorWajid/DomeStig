import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { EdituserscustomerComponent } from './edituserCustomer/editusercustomer.component';

const userRoutes:Routes=[
  {path:"",component:ListofusersComponent},
  {path:"addusers",component:EdituserscustomerComponent}
]



@NgModule({
  declarations: [
    ListofusersComponent,
    EdituserscustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UsersModule { }
