import { Component, Input } from '@angular/core';
import { Movies } from '../../../shared/models/movies'


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  defaultPoster: string = "../../../../../assets/single-logo.png"
  @Input()
  movies: Movies

}