import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';


@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    TranslateModule
  ]
})
export class BlogDetailsModule { }
