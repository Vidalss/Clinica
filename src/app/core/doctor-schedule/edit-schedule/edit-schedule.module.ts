import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditScheduleRoutingModule } from './edit-schedule-routing.module';
import { EditScheduleComponent } from './edit-schedule.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditScheduleComponent
  ],
  imports: [
    CommonModule,
    EditScheduleRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EditScheduleModule { }
