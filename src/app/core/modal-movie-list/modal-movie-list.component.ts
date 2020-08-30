import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { ModalDetailsMovieService } from '../services/modal-details-movie.service'
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../shared/models/movies'

@Component({
  selector: 'app-modal-movie-list',
  templateUrl: './modal-movie-list.component.html',
  styleUrls: ['./modal-movie-list.component.scss']
})

export class ModalMovieListComponent implements OnInit {
  searchMovie: string

  movies: Movies;
  errorMessage: string;

  constructor(private fetchMoviesService: FetchMoviesService, private route: ActivatedRoute, private modalDetailsMovieService: ModalDetailsMovieService) { }

  ngOnInit(): void {
    this.searchMovie = this.route.snapshot.params['movie']
    this.fetchMoviesService.getMovies(this.searchMovie).subscribe(items => {
      if (!items.Response) {
        this.errorMessage = items.Error
        return
      }
      this.movies = items;
    }, error => {
      this.errorMessage = error;
    })
  }

  openModalDetails(id) {
    this.modalDetailsMovieService.openModal(id)
  }

}
