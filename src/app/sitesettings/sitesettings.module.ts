import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesettingsComponent } from './servicesettings/servicesettings.component';
import { DisputesettingComponent } from './disputesetting/disputesetting.component';
import { SMTPdetailsComponent } from './smtpdetails/smtpdetails.component';
import { RouterModule, Routes } from '@angular/router';


const siteroutes:Routes=[
  {path:"servicesettings",component:ServicesettingsComponent},
  {path:"smtpdetails",component:SMTPdetailsComponent},
  {path:"disputesettings",component:DisputesettingComponent}
]



@NgModule({
  declarations: [
    ServicesettingsComponent,
    DisputesettingComponent,
    SMTPdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(siteroutes)
  ]
})
export class SitesettingsModule { }
