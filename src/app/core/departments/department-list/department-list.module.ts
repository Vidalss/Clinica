import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DepartmentListRoutingModule } from './department-list-routing.module';
import { DepartmentListComponent } from './department-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DepartmentListComponent
  ],
  imports: [
    CommonModule,
    DepartmentListRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class DepartmentListModule { }
