import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegaMenuModule } from 'primeng/megamenu'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MegaMenuModule
  ],
  exports: [
    MegaMenuModule,
  ]
})
export class PrimengModule { }
