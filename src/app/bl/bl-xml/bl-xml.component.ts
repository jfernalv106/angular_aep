import { Component, OnInit } from '@angular/core';
import { b64toBl } from '../utils-bl';
import { BlService } from '../bl.service';
import { Manifiesto, BlJson } from '../interfaces-bl';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-bl-xml',
    templateUrl: './bl-xml.component.html',
    styleUrls: ['./bl-xml.component.scss'],
})
export class BlXmlComponent implements OnInit {
    constructor(private blService: BlService) {}
    uploadedFiles: File[] = [];
    bl: string = '';
    bls:BlJson[]=[];
    error: Message[]=[];
    

    ngOnInit(): void {
        console.log('XML');
    }
    onUpload(event: any) {
        this.uploadedFiles = event.files;

        for (const fl of this.uploadedFiles) {
            const reader = new FileReader();
            reader.readAsDataURL(fl);
            reader.onload = () => {
                const base64: string = reader.result!.toString();
                let blJson:BlJson=b64toBl(base64);
                this.blService.buscarManifiesto(`${blJson.manifiesto?.nroMfto}`,'').subscribe(
                  (ct: Manifiesto | undefined) => {
                    blJson.manifiesto=ct;
                    if(ct?.estado==='TRASPASADO'){
                      blJson.estado='FUERAPLAZO'
                    }
                    this.bls.push(blJson);
                    this.bl = JSON.stringify(blJson);
                  });
               
            };
        }
    }
    guardar(){
      for (const b of this.bls) {
        this.blService.guardaBl(b).subscribe(
          (sl) => {
           console.log(sl);
          },
          (err) => {
              console.log('error');
              console.log(err);
              this.error = [
                {severity:'error', summary:'Error', detail:JSON.stringify(err)}
              ]
          }
      );
      }
    }
}
