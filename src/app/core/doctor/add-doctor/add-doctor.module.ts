import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AddDoctorRoutingModule } from './add-doctor-routing.module';
import { AddDoctorComponent } from './add-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { materialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    AddDoctorComponent
  ],
  imports: [
    CommonModule,
    AddDoctorRoutingModule,
    SharedModule,
    materialModule,
    TranslateModule
  ]
})
export class AddDoctorModule { }
