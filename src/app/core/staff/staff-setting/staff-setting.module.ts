import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StaffSettingRoutingModule } from './staff-setting-routing.module';
import { StaffSettingComponent } from './staff-setting.component';


@NgModule({
  declarations: [
    StaffSettingComponent
  ],
  imports: [
    CommonModule,
    StaffSettingRoutingModule,
    TranslateModule
  ]
})
export class StaffSettingModule { }
