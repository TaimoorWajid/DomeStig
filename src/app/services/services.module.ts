import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServiceComponent } from './add-service/add-service.component';
import { ListofservicesComponent } from './listofservices/listofservices.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicehistoryComponent } from './servicehistory/servicehistory.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

const servicesRoutes: Routes = [
  { path: "", component: ListofservicesComponent },
  { path: "addservice", component: AddServiceComponent },
  { path: "servicehistory", component: ServicehistoryComponent }

]


@NgModule({
  declarations: [
    AddServiceComponent,
    ListofservicesComponent,
    ServicehistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forChild(servicesRoutes)
  ]
})
export class ServicesModule { }
