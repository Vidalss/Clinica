import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditDoctorRoutingModule } from './edit-doctor-routing.module';
import { EditDoctorComponent } from './edit-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditDoctorComponent
  ],
  imports: [
    CommonModule,
    EditDoctorRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EditDoctorModule { }
