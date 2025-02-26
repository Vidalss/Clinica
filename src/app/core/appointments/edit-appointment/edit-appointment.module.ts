import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditAppointmentRoutingModule } from './edit-appointment-routing.module';
import { EditAppointmentComponent } from './edit-appointment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditAppointmentComponent
  ],
  imports: [
    CommonModule,
    EditAppointmentRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EditAppointmentModule { }
