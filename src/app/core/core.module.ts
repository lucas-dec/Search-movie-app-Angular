import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSearchModule } from './modal-search/modal-search.module'
import { ModalMovieListModule } from './modal-movie-list/modal-movie-list.module'
import { ModalDetailsMovieModule } from './modal-details-movie/modal-details-movie.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalSearchModule,
    ModalMovieListModule,
    ModalDetailsMovieModule,
  ],
  exports: [ModalSearchModule, ModalMovieListModule, ModalDetailsMovieModule]

})
export class CoreModule { }
