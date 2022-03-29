import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofwithdrawlsComponent } from './listofwithdrawls/listofwithdrawls.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawlssettingsComponent } from './withdrawlssettings/withdrawlssettings.component';
import { ViewwithdrawldetailsComponent } from './viewwithdrawldetails/viewwithdrawldetails.component';
import { EditwithdrawldetailsComponent } from './editwithdrawldetails/editwithdrawldetails.component';
import { WithdrawoptionComponent } from './withdrawoption/withdrawoption.component';


const withdrawlsRoutes:Routes=[
  {path:"",component:ListofwithdrawlsComponent},
  {path:"withdrawlssettings",component:WithdrawlssettingsComponent},
  {path:"viewwithdrawldetails",component:ViewwithdrawldetailsComponent},
  {path:"editwithdrawldetails",component:EditwithdrawldetailsComponent},
  {path:"withdrawoption",component:WithdrawoptionComponent}





]



@NgModule({
  declarations: [
    ListofwithdrawlsComponent,
    WithdrawlssettingsComponent,
    ViewwithdrawldetailsComponent,
    EditwithdrawldetailsComponent,
    WithdrawoptionComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forChild(withdrawlsRoutes)
  ]
})
export class WithdrawlsModule { }
