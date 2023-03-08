import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlXmlComponent } from './bl-xml/bl-xml.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { BlRouteModule } from './bl-route.module';
import { BlsTableComponent } from './bls-table/bls-table.component';
import { BlsManifiestoComponent } from './bls-manifiesto/bls-manifiesto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlXmlComponent,
    BlsTableComponent,
    BlsManifiestoComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    BlRouteModule,
    FormsModule
  ],exports:[
    BlXmlComponent,
    BlsTableComponent,
    BlsManifiestoComponent
  ]
})
export class BlModule { }
