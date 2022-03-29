import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path:"googlemaps",component:GooglemapsComponent},
  {
    path: 'listofpromos',
    loadChildren: () => import('../app/promo-codes/promo-codes.module').then(m => m.PromoCodesModule)
  },
  {
    path: "listofservices", loadChildren: () => import('../app/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: "listofdisputes", loadChildren: () => import('../app/booking-dispute/booking-dispute.module').then(m => m.BookingDisputeModule)
  },
  {
    path: "listofReferrals", loadChildren: () => import('../app/referralsandsettings/referralsandsettings.module').then(m => m.ReferralsandsettingsModule)
  },
  {
    path:"listofUsers",loadChildren:()=>import('../app/users/users.module').then(m=>m.UsersModule)
  },
  {
    path:"listofwithdrawls",loadChildren:()=>import('../app/withdrawls/withdrawls.module').then(m=>m.WithdrawlsModule)
  },
  {
    path:"listofpayment",loadChildren:()=>import('../app/payment-options/payment-options.module').then(m=>m.PaymentOptionsModule)
  },
  {
    path:"sitesettings",loadChildren:()=>import('../app/sitesettings/sitesettings.module').then(m=>m.SitesettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
