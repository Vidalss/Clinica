import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LocalizationDetailsRoutingModule } from './localization-details-routing.module';
import { LocalizationDetailsComponent } from './localization-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LocalizationDetailsComponent
  ],
  imports: [
    CommonModule,
    LocalizationDetailsRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class LocalizationDetailsModule { }
