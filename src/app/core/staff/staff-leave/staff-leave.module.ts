import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StaffLeaveRoutingModule } from './staff-leave-routing.module';
import { StaffLeaveComponent } from './staff-leave.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StaffLeaveComponent
  ],
  imports: [
    CommonModule,
    StaffLeaveRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class StaffLeaveModule { }
