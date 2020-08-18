import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMovieListComponent } from './modal-movie-list.component';



@NgModule({
  declarations: [ModalMovieListComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalMovieListComponent]
})
export class ModalMovieListModule { }
