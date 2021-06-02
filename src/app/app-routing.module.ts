import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsertEquipmentComponent } from './insert-equipment/insert-equipment.component';
import { ListEquipmentsComponent } from './list-equipments/list-equipments.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { InsertAllocationComponent } from './insert-allocation/insert-allocation.component';
import { ListAllocationsComponent } from './list-allocations/list-allocations.component';
import { UpdateAllocationComponent } from './update-allocation/update-allocation.component';
import { InsertAccountComponent } from './insert-account/insert-account.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
//import { UpdateAccountComponent } from './update-account/update-account.component';

//import { SendMessageComponent } from './send-message/send-message.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'insert-equipment', component: InsertEquipmentComponent },
  { path: 'update-equipment/:id', component: UpdateEquipmentComponent },
  { path: 'list-equipments', component: ListEquipmentsComponent },
  { path: 'insert-employee', component: InsertEmployeeComponent},
  { path: 'list-employees', component: ListEmployeesComponent},
  { path: 'list-projects', component: ListProjectsComponent},
  { path: 'insert-allocation', component: InsertAllocationComponent},
  { path: 'list-allocations', component: ListAllocationsComponent},
  { path: 'update-allocation/:id', component: UpdateAllocationComponent },
  { path: 'insert-account', component: InsertAccountComponent},
  { path: 'list-accounts', component: ListAccountsComponent}
  //{ path: 'update-account', component: UpdateAccountComponent}

  //{ path: 'send-message', component: SendMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }