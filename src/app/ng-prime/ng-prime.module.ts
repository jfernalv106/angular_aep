import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {FileUploadModule} from 'primeng/fileupload';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PasswordModule} from 'primeng/password';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {GalleriaModule} from 'primeng/galleria';



@NgModule({
  exports:[    
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    CheckboxModule,
    InputSwitchModule,
    TableModule,
    AutoCompleteModule,
    CardModule,
    TabViewModule,
    DividerModule,
    DataViewModule,
    DialogModule,
    ProgressSpinnerModule,
    FileUploadModule,
    ConfirmPopupModule,
    CalendarModule,
    InputTextareaModule,
    PasswordModule,
    MultiSelectModule,
    DropdownModule,
    GalleriaModule
  ]
})
export class NgPrimeModule { }
