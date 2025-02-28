import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsComponent } from './calls.component';


@NgModule({
  declarations: [
    CallsComponent
  ],
  imports: [
    CommonModule,
    CallsRoutingModule,
    TranslateModule
  ]
})
export class CallsModule { }
