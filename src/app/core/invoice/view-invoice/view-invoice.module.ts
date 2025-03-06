import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ViewInvoiceRoutingModule } from './view-invoice-routing.module';
import { ViewInvoiceComponent } from './view-invoice.component';


@NgModule({
  declarations: [
    ViewInvoiceComponent
  ],
  imports: [
    CommonModule,
    ViewInvoiceRoutingModule,
    TranslateModule
  ]
})
export class ViewInvoiceModule { }
