import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSearchModule } from './modal-search/modal-search.module'
import { ModalMovieListModule } from './modal-movie-list/modal-movie-list.module'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalSearchModule,
    ModalMovieListModule
  ],
  exports: [ModalSearchModule, ModalMovieListModule]

})
export class CoreModule { }
