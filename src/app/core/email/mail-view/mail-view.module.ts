import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MailViewRoutingModule } from './mail-view-routing.module';
import { MailViewComponent } from './mail-view.component';


@NgModule({
  declarations: [
    MailViewComponent
  ],
  imports: [
    CommonModule,
    MailViewRoutingModule,
    TranslateModule
  ]
})
export class MailViewModule { }
