import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ComposeRoutingModule } from './compose-routing.module';
import { ComposeComponent } from './compose.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ComposeComponent
  ],
  imports: [
    CommonModule,
    ComposeRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class ComposeModule { }
