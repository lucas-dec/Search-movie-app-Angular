import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMovieListComponent } from './modal-movie-list.component';
import { HeaderFetchMoviesComponent } from './header-fetch-movies/header-fetch-movies.component';
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [ModalMovieListComponent, HeaderFetchMoviesComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ModalMovieListComponent]
})
export class ModalMovieListModule { }
