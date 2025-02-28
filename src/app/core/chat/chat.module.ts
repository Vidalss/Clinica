import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    TranslateModule
  ]
})
export class ChatModule { }
