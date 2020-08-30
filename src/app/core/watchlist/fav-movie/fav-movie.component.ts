import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavMovie } from '../../../shared/models/watchList'
import { ModalDetailsMovieService } from '../../services/modal-details-movie.service';

@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.scss']
})
export class FavMovieComponent {
  @Input()
  moviesOnWatchlist: Array<FavMovie>

  @Output()
  removeMovie = new EventEmitter()
  constructor(private modalDetailsMovieService: ModalDetailsMovieService) { }
  defaultPoster: string = "../../../../assets/single-logo.png"

  openDetailsModal(id) {
    this.modalDetailsMovieService.openModal(id)
  }
  remove(id) {
    this.removeMovie.emit(id)

  }
}
