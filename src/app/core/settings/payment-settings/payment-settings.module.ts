import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PaymentSettingsRoutingModule } from './payment-settings-routing.module';
import { PaymentSettingsComponent } from './payment-settings.component';


@NgModule({
  declarations: [
    PaymentSettingsComponent
  ],
  imports: [
    CommonModule,
    PaymentSettingsRoutingModule,
    TranslateModule
  ]
})
export class PaymentSettingsModule { }
