import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SocialSettingsRoutingModule } from './social-settings-routing.module';
import { SocialSettingsComponent } from './social-settings.component';


@NgModule({
  declarations: [
    SocialSettingsComponent
  ],
  imports: [
    CommonModule,
    SocialSettingsRoutingModule,
    TranslateModule
  ]
})
export class SocialSettingsModule { }
