import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';


@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    TranslateModule
  ]
})
export class InboxModule { }
