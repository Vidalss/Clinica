import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmMailRoutingModule } from './confirm-mail-routing.module';
import { ConfirmMailComponent } from './confirm-mail.component';


@NgModule({
  declarations: [
    ConfirmMailComponent
  ],
  imports: [
    CommonModule,
    ConfirmMailRoutingModule,
    TranslateModule
  ]
})
export class ConfirmMailModule { }
