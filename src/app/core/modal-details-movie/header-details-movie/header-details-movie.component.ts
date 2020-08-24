import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-details-movie',
  templateUrl: './header-details-movie.component.html',
  styleUrls: ['./header-details-movie.component.scss']
})
export class HeaderDetailsMovieComponent {
  @Input()
  title: string
  @Input()
  year: number
  @Input()
  imdbRating: number
  @Input()
  imdbVotes: number

}
