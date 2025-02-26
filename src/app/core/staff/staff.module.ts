import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';


@NgModule({
  declarations: [
    StaffComponent,
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    TranslateModule
  ]
})
export class StaffModule { }
