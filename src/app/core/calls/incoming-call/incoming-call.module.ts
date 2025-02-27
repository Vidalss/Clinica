import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { IncomingCallRoutingModule } from './incoming-call-routing.module';
import { IncomingCallComponent } from './incoming-call.component';


@NgModule({
  declarations: [
    IncomingCallComponent
  ],
  imports: [
    CommonModule,
    IncomingCallRoutingModule,
    TranslateModule
  ]
})
export class IncomingCallModule { }
