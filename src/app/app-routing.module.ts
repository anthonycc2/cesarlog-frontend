import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertEquipmentComponent } from './insert-equipment/insert-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/insert-equipment', pathMatch: 'full' },
  //{ path: 'cliente/:id', component: ClienteDetalheComponent },
  { path: 'insert-equipment', component: InsertEquipmentComponent },
  { path: 'update-equipment', component: UpdateEquipmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }