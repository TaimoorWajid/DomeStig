import { ApplicationRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofpromosComponent } from './listofpromos/listofpromos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const promoRoutes:Routes=[
  {path:"",component:ListofpromosComponent}
]



@NgModule({
  declarations: [
    ListofpromosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(promoRoutes)
  ]
})
export class PromoCodesModule { }
