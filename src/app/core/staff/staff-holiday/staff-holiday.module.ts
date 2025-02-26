import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StaffHolidayRoutingModule } from './staff-holiday-routing.module';
import { StaffHolidayComponent } from './staff-holiday.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StaffHolidayComponent
  ],
  imports: [
    CommonModule,
    StaffHolidayRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class StaffHolidayModule { }
