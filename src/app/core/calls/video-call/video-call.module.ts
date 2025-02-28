import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { VideoCallRoutingModule } from './video-call-routing.module';
import { VideoCallComponent } from './video-call.component';


@NgModule({
  declarations: [
    VideoCallComponent
  ],
  imports: [
    CommonModule,
    VideoCallRoutingModule,
    TranslateModule
  ]
})
export class VideoCallModule { }
