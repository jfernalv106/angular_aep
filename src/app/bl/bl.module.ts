import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlXmlComponent } from './bl-xml/bl-xml.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { BlRouteModule } from './bl-route.module';



@NgModule({
  declarations: [BlXmlComponent],
  imports: [
    CommonModule,
    NgPrimeModule,
    BlRouteModule
  ],exports:[
    BlXmlComponent
  ]
})
export class BlModule { }
