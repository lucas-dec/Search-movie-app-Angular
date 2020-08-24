import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movies } from '../../../shared/models/movies'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input()
  movies: Movies

  @Output()
  openModalDetails = new EventEmitter<string>();

  defaultPoster: string = "../../../../../assets/single-logo.png"

  openModal(id) {
    this.openModalDetails.emit(id)
  }
}