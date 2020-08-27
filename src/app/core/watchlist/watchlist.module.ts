import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { FavMovieComponent } from './fav-movie/fav-movie.component';

@NgModule({
  declarations: [WatchlistComponent, FavMovieComponent],
  imports: [
    CommonModule
  ],
  exports: [WatchlistComponent]
})
export class WatchlistModule { }
