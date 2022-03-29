import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofReferralsComponent } from './listof-referrals/listof-referrals.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingsComponent } from './settings/settings.component';

const referralRoutes:Routes=[
  {path:"",component:ListofReferralsComponent},
  {path:"referralsSettings",component:SettingsComponent}
]


@NgModule({
  declarations: [
    ListofReferralsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forChild(referralRoutes)
  ]
})
export class ReferralsandsettingsModule { }
