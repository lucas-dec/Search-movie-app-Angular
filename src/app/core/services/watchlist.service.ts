import { Injectable } from '@angular/core';
import { favMovies, updateStorage } from '../storage/localStorage'
import { FavMovie } from '../../shared/models/watchList'
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FavMovieComponent } from '../watchlist/fav-movie/fav-movie.component';
import { ActionMessages } from '../../shared/models/action-messages.enum'

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private moviesWatchlist = new BehaviorSubject<FavMovie[]>([]);
  private actionMessage = new Subject<string>();

  constructor() {}

  getFavMovies(): BehaviorSubject<FavMovie[]> {
    return this.moviesWatchlist
  }

  showActionMessage(): Subject<string> {
    return this.actionMessage
  }

  addFavMovie(movie): void {
    this.moviesWatchlist.pipe(take(1)).subscribe(favMovies => {
      favMovies.push(movie);
      this.moviesWatchlist.next(favMovies)
      updateStorage(favMovies)
    })
    this.actionMessage.next(ActionMessages.ADD_MESSAGE)
  }

  removeMovie(id): void {
    this.moviesWatchlist.pipe(take(1)).subscribe(favMovies => {
      favMovies = favMovies.filter(movie => movie.movieID != id);
      this.moviesWatchlist.next(favMovies)
      updateStorage(favMovies)
      this.actionMessage.next(ActionMessages.REMOVE_MESSAGE)
    })
  }
}
