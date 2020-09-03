import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMovieListComponent } from './modal-movie-list.component';
import { HeaderFetchMoviesComponent } from './header-fetch-movies/header-fetch-movies.component';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component'
import {SharedModule} from '../../shared/shared.module'

@NgModule({
  declarations: [ModalMovieListComponent, HeaderFetchMoviesComponent, MovieListComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
})
export class ModalMovieListModule { }
