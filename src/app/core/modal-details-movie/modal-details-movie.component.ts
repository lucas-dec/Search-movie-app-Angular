import { Component, OnInit, Input } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { Movie } from '../../shared/models/movie'
import { ModalDetailsMovieService } from '../services/modal-details-movie.service';
import { WatchlistService } from '../services/watchlist.service'
import { ActionType } from '../../shared/models/action-type.enum'

@Component({
  selector: 'app-modal-details-movie',
  templateUrl: './modal-details-movie.component.html',
  styleUrls: ['./modal-details-movie.component.scss']
})

export class ModalDetailsMovieComponent implements OnInit {
  @Input()
  idMovie: string

  movie: any;
  errorMessage: string;
  isLoading: boolean = false;
  defaultPoster: string = "../../../assets/single-logo.png";
  actionMessage: string
  actionType: string

  constructor(private fetchMoviesService: FetchMoviesService, private modalDetailsMovieService: ModalDetailsMovieService, private watchlistService: WatchlistService) { }
  ngOnInit(): void {
    this.fetchDetailsMovie()
    this.setNotification()
    this.setActionType()
  }

  fetchDetailsMovie() {
    this.isLoading = true
    this.fetchMoviesService.getMovieDetails(this.idMovie).subscribe(movie => {
      if (movie.Response == "False") {
        this.errorMessage = movie.Error;
        this.isLoading = false
        return
      }
      this.movie = movie
      this.isLoading = false

    }, err => {
      this.errorMessage = err;
      this.isLoading = false;
    })
  }

  setNotification() {
    this.watchlistService.showActionMessage().subscribe(message => this.actionMessage = message)
  }

  setActionType() {
    this.watchlistService.getFavMovies().subscribe(movies => {
      const isOnWatchlist = movies.filter(movie => movie.movieID === this.idMovie)
      if (isOnWatchlist.length > 0) this.actionType = ActionType.REMOVE
      else this.actionType = ActionType.ADD
    })

  }

  handleAction() {
    if (this.actionType === ActionType.ADD) {
      const movie = {
        movieID: this.idMovie,
        title: this.movie.Title,
        poster: this.movie.Poster
      }
      this.watchlistService.addFavMovie(movie)
    }
    else if (this.actionType === ActionType.REMOVE) {
      this.watchlistService.removeMovie(this.idMovie)
    }
  }


  handleCloseDetailsModal() {
    this.modalDetailsMovieService.closeModal()
  }
}
