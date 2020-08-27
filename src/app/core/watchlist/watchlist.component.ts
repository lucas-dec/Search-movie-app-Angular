import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavMovie } from '../../shared/models/watchList'
import { WatchlistService } from '../services/watchlist.service'
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit, OnDestroy {

  openWatchlist: boolean = true;
  moviesOnWatchlist: Array<FavMovie>;
  private subscription: Subscription;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.subscription = this.watchlistService.getFavMovies().subscribe(movies => {
      this.moviesOnWatchlist = movies
      console.log(this.moviesOnWatchlist);

    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toogleWatchlist() {
    this.openWatchlist = !this.openWatchlist
  }
}
