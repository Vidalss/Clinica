import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InvoiceReportsRoutingModule } from './invoice-reports-routing.module';
import { InvoiceReportsComponent } from './invoice-reports.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoiceReportsComponent
  ],
  imports: [
    CommonModule,
    InvoiceReportsRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class InvoiceReportsModule { }
