import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditLeaveRoutingModule } from './edit-leave-routing.module';
import { EditLeaveComponent } from './edit-leave.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditLeaveComponent
  ],
  imports: [
    CommonModule,
    EditLeaveRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EditLeaveModule { }
