import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { OthersSettingsRoutingModule } from './others-settings-routing.module';
import { OthersSettingsComponent } from './others-settings.component';


@NgModule({
  declarations: [
    OthersSettingsComponent
  ],
  imports: [
    CommonModule,
    OthersSettingsRoutingModule,
    TranslateModule
  ]
})
export class OthersSettingsModule { }
