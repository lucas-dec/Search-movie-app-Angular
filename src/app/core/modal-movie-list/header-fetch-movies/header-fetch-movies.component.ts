import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-fetch-movies',
  templateUrl: './header-fetch-movies.component.html',
  styleUrls: ['./header-fetch-movies.component.scss']
})
export class HeaderFetchMoviesComponent {
  @Input()
  searchMovie: string
}
