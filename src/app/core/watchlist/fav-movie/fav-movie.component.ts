import { Component, OnInit, Input } from '@angular/core';
import { FavMovie } from '../../../shared/models/watchList'

@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.scss']
})
export class FavMovieComponent {
  @Input()
  moviesOnWatchlist: Array<FavMovie>

  defaultPoster: string = "../../../../assets/single-logo.png"

  openDetailsModal(id) {
    console.log("openModal z ID: ", id);
  }
  action(type, id) {
    console.log("akcja typu z id: ", type, id);

  }
}
