import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSearchModule } from './modal-search/modal-search.module'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalSearchModule
  ],
  exports: [ModalSearchModule]

})
export class CoreModule { }
