import { Component, OnInit, Input } from '@angular/core';
import { BlJson, Referencia } from '../interfaces-bl';

@Component({
  selector: 'app-bls-table',
  templateUrl: './bls-table.component.html',
  styleUrls: ['./bls-table.component.scss']
})
export class BlsTableComponent implements OnInit {

  @Input()  bls:BlJson[]=[];
  @Input()  blsAux:BlJson[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log('');

  }
  referencia(b:BlJson){
    return b.blReferencias?.find((c)=>c.tipoDocumento=='BL')?.numero;
  }

}
