import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AddAssetRoutingModule } from './add-asset-routing.module';
import { AddAssetComponent } from './add-asset.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateCompiler } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AddAssetComponent
  ],
  imports: [
    CommonModule,
    AddAssetRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class AddAssetModule { }
