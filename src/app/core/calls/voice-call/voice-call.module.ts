import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { VoiceCallRoutingModule } from './voice-call-routing.module';
import { VoiceCallComponent } from './voice-call.component';


@NgModule({
  declarations: [
    VoiceCallComponent
  ],
  imports: [
    CommonModule,
    VoiceCallRoutingModule,
    TranslateModule
  ]
})
export class VoiceCallModule { }
