import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMovieListComponent } from './modal-movie-list.component';
import { HeaderFetchMoviesComponent } from './header-fetch-movies/header-fetch-movies.component';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component'
import { ModalDetailsMovieModule } from '../modal-details-movie/modal-details-movie.module'



@NgModule({
  declarations: [ModalMovieListComponent, HeaderFetchMoviesComponent, MovieListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalDetailsMovieModule
  ]
})
export class ModalMovieListModule { }
