import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { Movie } from '../../shared/models/movie'

@Component({
  selector: 'app-modal-details-movie',
  templateUrl: './modal-details-movie.component.html',
  styleUrls: ['./modal-details-movie.component.scss']
})
export class ModalDetailsMovieComponent implements OnInit {

  @Input()
  idMovie: string

  @Output()
  closeModal = new EventEmitter<void>();

  movie: Movie;
  errorMessage: string;
  isLoading: boolean = false;
  defaultPoster: string = "../../../assets/single-logo.png";

  constructor(private fetchMoviesService: FetchMoviesService) { }
  ngOnInit(): void {
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
      this.isLoading = false
    })
  }

  handleCloseDetailsModal() {
    this.closeModal.emit()
  }
}
