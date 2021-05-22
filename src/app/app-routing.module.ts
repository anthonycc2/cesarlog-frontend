import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertEquipmentComponent } from './insert-equipment/insert-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { ListEquipmentsComponent } from './list-equipments/list-equipments.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { InsertEquipmentAssignmentComponent } from './insert-equipment-assignment/insert-equipment-assignment.component';
import { ListEquipmentAssignmentsComponent } from './list-equipment-assignments/list-equipment-assignments.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-equipments', pathMatch: 'full' },
  { path: 'insert-equipment', component: InsertEquipmentComponent },
  { path: 'update-equipment/:id', component: UpdateEquipmentComponent },
  { path: 'list-equipments', component: ListEquipmentsComponent },
  { path: 'insert-employee', component: InsertEmployeeComponent},
  { path: 'list-employees', component: ListEmployeesComponent},
  { path: 'list-projects', component: ListProjectsComponent},
  { path: 'insert-equipment-assignment', component: InsertEquipmentAssignmentComponent },
  //{ path: 'update-equipment-assignment/:id', component: UpdateEquipmentAssignmentComponent },
  { path: 'list-equipment-assignments', component: ListEquipmentAssignmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }