import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { GeneralSettingsRoutingModule } from './general-settings-routing.module';
import { GeneralSettingsComponent } from './general-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GeneralSettingsComponent
  ],
  imports: [
    CommonModule,
    GeneralSettingsRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class GeneralSettingsModule { }
