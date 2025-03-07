import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InvoicesRecurringRoutingModule } from './invoices-recurring-routing.module';
import { InvoicesRecurringComponent } from './invoices-recurring.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesRecurringComponent
  ],
  imports: [
    CommonModule,
    InvoicesRecurringRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class InvoicesRecurringModule { }
