import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditInvoicesRoutingModule } from './edit-invoices-routing.module';
import { EditInvoicesComponent } from './edit-invoices.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditInvoicesComponent
  ],
  imports: [
    CommonModule,
    EditInvoicesRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EditInvoicesModule { }
