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


@NgModule({
  declarations: [
    AppComponent,
    InsertEquipmentComponent,
    UpdateEquipmentComponent,
    ListEquipmentsComponent,
    ListEmployeesComponent
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