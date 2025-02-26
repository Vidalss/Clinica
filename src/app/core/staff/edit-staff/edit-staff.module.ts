import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditStaffRoutingModule } from './edit-staff-routing.module';
import { EditStaffComponent } from './edit-staff.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditStaffComponent
  ],
  imports: [
    CommonModule,
    EditStaffRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EditStaffModule { }
