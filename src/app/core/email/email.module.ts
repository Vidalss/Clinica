import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';


@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    TranslateModule
  ]
})
export class EmailModule { }
