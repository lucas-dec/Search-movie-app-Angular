import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  openWatchlist: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toogleWatchlist() {
    this.openWatchlist = !this.openWatchlist
  }
}
