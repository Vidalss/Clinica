import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EmailSettingsRoutingModule } from './email-settings-routing.module';
import { EmailSettingsComponent } from './email-settings.component';


@NgModule({
  declarations: [
    EmailSettingsComponent
  ],
  imports: [
    CommonModule,
    EmailSettingsRoutingModule,
    TranslateModule
  ]
})
export class EmailSettingsModule { }
