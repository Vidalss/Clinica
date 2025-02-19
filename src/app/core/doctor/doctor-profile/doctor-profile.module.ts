import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DoctorProfileRoutingModule } from './doctor-profile-routing.module';
import { DoctorProfileComponent } from './doctor-profile.component';


@NgModule({
  declarations: [
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    DoctorProfileRoutingModule,
    TranslateModule
  ]
})
export class DoctorProfileModule { }
