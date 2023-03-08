import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { InputApunteComponent } from './input-apunte/input-apunte.component';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'buscar', component: BuscarComponent },
      { path: 'nuevo', component: InputApunteComponent }

  ])],
  exports: [RouterModule]
})
export class ApunteRouteModule { }
