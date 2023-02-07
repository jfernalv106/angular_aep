import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlXmlComponent } from './bl-xml/bl-xml.component';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'xml', component: BlXmlComponent }

  ])],
  exports: [RouterModule]
})
export class BlRouteModule { }
