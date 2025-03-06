import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InvoicesListRoutingModule } from './invoices-list-routing.module';
import { InvoicesListComponent } from './invoices-list.component';


@NgModule({
  declarations: [
    InvoicesListComponent
  ],
  imports: [
    CommonModule,
    InvoicesListRoutingModule,
    TranslateModule
  ]
})
export class InvoicesListModule { }
