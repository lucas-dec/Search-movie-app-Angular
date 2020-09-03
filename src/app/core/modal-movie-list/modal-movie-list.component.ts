import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { ModalDetailsMovieService } from '../services/modal-details-movie.service'
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../shared/models/movies';

@Component({
  selector: 'app-modal-movie-list',
  templateUrl: './modal-movie-list.component.html',
  styleUrls: ['./modal-movie-list.component.scss']
})

export class ModalMovieListComponent implements OnInit {
  searchMovie: string

  movies: Movies;
  errorMessage: string;
  isLoading: boolean = false;

  constructor(private fetchMoviesService: FetchMoviesService, private route: ActivatedRoute, private modalDetailsMovieService: ModalDetailsMovieService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.searchMovie = this.route.snapshot.params['movie']
    this.fetchMoviesService.getMovies(this.searchMovie).subscribe(items => {
      if (!items.Response) {
        this.errorMessage = items.Error
        this.isLoading = false
        return
      }
      this.movies = items;
      this.isLoading = false
    }, error => {
      this.errorMessage = error;
      this.isLoading = false
    })
  }

  openModalDetails(id) {
    this.modalDetailsMovieService.openModal(id)
  }

}
