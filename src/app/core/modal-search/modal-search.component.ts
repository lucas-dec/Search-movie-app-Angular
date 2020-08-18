import { Component } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service'
import { Movies } from '../../shared/models/movies'

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent {

  constructor() { }

}
