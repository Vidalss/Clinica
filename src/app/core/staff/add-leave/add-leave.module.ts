import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AddLeaveRoutingModule } from './add-leave-routing.module';
import { AddLeaveComponent } from './add-leave.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddLeaveComponent
  ],
  imports: [
    CommonModule,
    AddLeaveRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class AddLeaveModule { }
