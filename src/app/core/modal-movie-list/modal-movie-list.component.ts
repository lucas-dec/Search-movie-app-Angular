import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
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

  constructor(private fetchMoviesService: FetchMoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchMovie = params['movie']
    })
    this.fetchMoviesService.getRecommendedRecipes(this.searchMovie).subscribe(items => {
      if (!items.Response) {
        this.errorMessage = items.Error
      }
      this.movies = items;
      console.log(this.movies);
    }, error => {
      this.errorMessage = error
    })
  }


}
