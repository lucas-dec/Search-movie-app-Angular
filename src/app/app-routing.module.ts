import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalSearchComponent } from "./core/modal-search/modal-search.component"
import { ModalMovieListComponent } from './core/modal-movie-list/modal-movie-list.component'
import { ModalDetailsMovieComponent } from './core/modal-details-movie/modal-details-movie.component';


const routes: Routes = [
  { path: "", component: ModalSearchComponent },
  { path: "search/:movie", component: ModalMovieListComponent },
  { path: "movie/:id", component: ModalDetailsMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
