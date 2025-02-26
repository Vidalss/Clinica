import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PatientSettingRoutingModule } from './patient-setting-routing.module';
import { PatientSettingComponent } from './patient-setting.component';


@NgModule({
  declarations: [
    PatientSettingComponent
  ],
  imports: [
    CommonModule,
    PatientSettingRoutingModule,
    TranslateModule
  ]
})
export class PatientSettingModule { }
