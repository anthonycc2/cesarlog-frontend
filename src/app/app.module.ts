import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InsertEquipmentComponent } from './insert-equipment/insert-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { ListEquipmentsComponent } from './list-equipments/list-equipments.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { HomeComponent } from './home/home.component';
import { InsertAllocationComponent } from './insert-allocation/insert-allocation.component';
import { ListAllocationsComponent } from './list-allocations/list-allocations.component';
import { UpdateAllocationComponent } from './update-allocation/update-allocation.component';
import { InsertAccountComponent } from './insert-account/insert-account.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ListMyAllocationsComponent } from './list-my-allocations/list-my-allocations.component';
import { DetailAllocationComponent } from './detail-allocation/detail-allocation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertEquipmentComponent,
    UpdateEquipmentComponent,
    ListEquipmentsComponent,
    ListEmployeesComponent,
    ListProjectsComponent,
    HomeComponent,
    InsertAllocationComponent,
    ListAllocationsComponent,
    UpdateAllocationComponent,
    InsertAccountComponent,
    ListAccountsComponent,
    UpdateAccountComponent,
    ListMyAllocationsComponent,
    DetailAllocationComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }