import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSearchModule } from './modal-search/modal-search.module'
import { ModalMovieListModule } from './modal-movie-list/modal-movie-list.module'
import { WatchlistModule } from './watchlist/watchlist.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalSearchModule,
    ModalMovieListModule,
    WatchlistModule
  ],
  exports: [ModalSearchModule, ModalMovieListModule, WatchlistModule]

})
export class CoreModule { }
