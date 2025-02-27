import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SeoSettingsRoutingModule } from './seo-settings-routing.module';
import { SeoSettingsComponent } from './seo-settings.component';


@NgModule({
  declarations: [
    SeoSettingsComponent
  ],
  imports: [
    CommonModule,
    SeoSettingsRoutingModule,
    TranslateModule
  ]
})
export class SeoSettingsModule { }
