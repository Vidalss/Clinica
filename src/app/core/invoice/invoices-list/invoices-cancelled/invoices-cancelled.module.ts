import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InvoicesCancelledRoutingModule } from './invoices-cancelled-routing.module';
import { InvoicesCancelledComponent } from './invoices-cancelled.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesCancelledComponent
  ],
  imports: [
    CommonModule,
    InvoicesCancelledRoutingModule,
    SharedModule, 
    TranslateModule
  ]
})
export class InvoicesCancelledModule { }
