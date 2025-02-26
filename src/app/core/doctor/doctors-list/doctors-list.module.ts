import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DoctorsListRoutingModule } from './doctors-list-routing.module';
import { DoctorsListComponent } from './doctors-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorsListComponent
  ],
  imports: [
    CommonModule,
    DoctorsListRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class DoctorsListModule { }
