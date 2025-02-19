import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DoctorSettingRoutingModule } from './doctor-setting-routing.module';
import { DoctorSettingComponent } from './doctor-setting.component';


@NgModule({
  declarations: [
    DoctorSettingComponent
  ],
  imports: [
    CommonModule,
    DoctorSettingRoutingModule,
    TranslateModule
  ]
})
export class DoctorSettingModule { }
