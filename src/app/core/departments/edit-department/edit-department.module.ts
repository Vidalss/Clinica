import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditDepartmentRoutingModule } from './edit-department-routing.module';
import { EditDepartmentComponent } from './edit-department.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    EditDepartmentRoutingModule,
    SharedModule,
    TranslateModule
    
  ]
})
export class EditDepartmentModule { }
