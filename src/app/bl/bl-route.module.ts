import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlXmlComponent } from './bl-xml/bl-xml.component';
import { BlsManifiestoComponent } from './bls-manifiesto/bls-manifiesto.component';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'xml', component: BlXmlComponent },
      { path: 'bls', component: BlsManifiestoComponent }

  ])],
  exports: [RouterModule]
})
export class BlRouteModule { }
