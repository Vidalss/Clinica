import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditInvoiceRoutingModule } from './edit-invoice-routing.module';
import { EditInvoiceComponent } from './edit-invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditInvoiceComponent
  ],
  imports: [
    CommonModule,
    EditInvoiceRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EditInvoiceModule { }
