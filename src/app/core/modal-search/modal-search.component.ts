import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service'
import { Movies } from '../../shared/models/movies'

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent implements OnInit {

  movies: Movies;
  errorMessage: string;
  constructor(private fetchMoviesService: FetchMoviesService) { }

  ngOnInit(): void {
  }

  searchedValue(e) {
    this.fetchMoviesService.getRecommendedRecipes(e).subscribe(items => {

      this.movies = items;
      console.log(this.movies);

    }, error => {
      this.errorMessage = error
    })

  }
}
