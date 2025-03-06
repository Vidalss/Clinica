import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TaxSettingsRoutingModule } from './tax-settings-routing.module';
import { TaxSettingsComponent } from './tax-settings.component';


@NgModule({
  declarations: [
    TaxSettingsComponent
  ],
  imports: [
    CommonModule,
    TaxSettingsRoutingModule,
    TranslateModule
  ]
})
export class TaxSettingsModule { }
