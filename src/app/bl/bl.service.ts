import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_URL } from '../constantes';
import { Manifiesto, BlJson } from './interfaces-bl';

@Injectable({
  providedIn: 'root'
})
export class BlService {

  constructor(private http: HttpClient) { }


  buscarManifiesto(nro:string,nroInterno:string): Observable<Manifiesto> {
    let url = `${REST_URL}manifiesto?`;
    if (nro != '') {
        url += `nro=${nro}&`;
    }
    if (nroInterno != '') {
        url += `nroInterno=${nroInterno}&`;
    }
   
    return this.http.get<Manifiesto>(url);
  }
  guardaBl(bl:BlJson) : Observable<BlJson> {
    return this.http.post<BlJson>(`${ REST_URL }bl`, bl);
  }
}
