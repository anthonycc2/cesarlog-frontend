import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertEquipmentComponent } from './insert-equipment/insert-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { ListEquipmentsComponent } from './list-equipments/list-equipments.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/list-employees', pathMatch: 'full' },
  //{ path: 'cliente/:id', component: ClienteDetalheComponent },
  { path: 'insert-equipment', component: InsertEquipmentComponent },
  { path: 'update-equipment', component: UpdateEquipmentComponent },
  { path: 'list-equipments', component: ListEquipmentsComponent },
  { path: 'list-employees', component: ListEmployeesComponent},
  { path: 'list-projects', component: ListProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }