import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BankSettingsRoutingModule } from './bank-settings-routing.module';
import { BankSettingsComponent } from './bank-settings.component';


@NgModule({
  declarations: [
    BankSettingsComponent
  ],
  imports: [
    CommonModule,
    BankSettingsRoutingModule,
    TranslateModule
  ]
})
export class BankSettingsModule { }
