import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    TranslateModule
  ]
})
export class BlogModule { }
