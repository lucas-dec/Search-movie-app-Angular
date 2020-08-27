import { Injectable } from '@angular/core';
import { favMovies, updateStorage } from '../storage/localStorage'
import { FavMovie } from '../../shared/models/watchList'
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FavMovieComponent } from '../watchlist/fav-movie/fav-movie.component';



@Injectable({
  providedIn: 'root'
})
export class WatchlistService {


  private moviesWatchlist = new BehaviorSubject<FavMovie[]>([]);


  constructor() {

    const fakeData = [{
      movieID: 123,
      title: "test",
      poster: "testowy poster"
    },
    {
      movieID: 456,
      title: "test2",
      poster: "N/A"
    }]
    updateStorage(fakeData)
    this.moviesWatchlist.next(favMovies)
    console.log('poczatkowa wartosc watchlist: ', this.moviesWatchlist.value);


  }

  getFavMovies(): Observable<FavMovie[]> {
    return this.moviesWatchlist
  }

  addFavMovie(movie): void {
    this.moviesWatchlist.next(movie)
    updateStorage(movie)
    console.log('dodano film do localStorage', movie)
  }

  removeMovie(id): void {
    console.log('usuwanie filmu o id:', id);
    console.log('watchlist przed usuwaniem:', this.moviesWatchlist);

    const newStorage = this.moviesWatchlist.value.filter(movie => movie.movieID !== id);
    this.moviesWatchlist.next(newStorage)

    console.log('nowy watchlis:', this.moviesWatchlist);
    updateStorage(newStorage)
  }
}
