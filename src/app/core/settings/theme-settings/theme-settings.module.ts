import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeSettingsRoutingModule } from './theme-settings-routing.module';
import { ThemeSettingsComponent } from './theme-settings.component';


@NgModule({
  declarations: [
    ThemeSettingsComponent
  ],
  imports: [
    CommonModule,
    ThemeSettingsRoutingModule,
    TranslateModule
  ]
})
export class ThemeSettingsModule { }
