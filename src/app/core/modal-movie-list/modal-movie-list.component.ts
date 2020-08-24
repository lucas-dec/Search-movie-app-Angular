import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../shared/models/movies'
import { ModalDetailsMovie } from '../../shared/models/modalDetailsMovie'

@Component({
  selector: 'app-modal-movie-list',
  templateUrl: './modal-movie-list.component.html',
  styleUrls: ['./modal-movie-list.component.scss']
})

export class ModalMovieListComponent implements OnInit {
  searchMovie: string

  movies: Movies;
  errorMessage: string;

  openModalFlag: boolean = false;
  modalDetailsMovie: ModalDetailsMovie = {
    isOpen: false,
    idMovie: null
  }

  constructor(private fetchMoviesService: FetchMoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchMovie = this.route.snapshot.params['movie']
    this.fetchMoviesService.getRecommendedRecipes(this.searchMovie).subscribe(items => {
      if (!items.Response) {
        this.errorMessage = items.Error
        return
      }
      this.movies = items;
    }, error => {
      this.errorMessage = error;
    })
  }

  openModal(idMovie: string) {
    this.modalDetailsMovie = {
      isOpen: true,
      idMovie: idMovie
    }
    this.openModalFlag = true

  }
  onCloseModal() {
    this.modalDetailsMovie = {
      isOpen: false,
      idMovie: null
    }
  }
}
