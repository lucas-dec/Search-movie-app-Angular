import { Component, OnInit } from '@angular/core';
import { ModalDetailsMovieService } from './core/services/modal-details-movie.service'
import { ModalDetailsStatus } from './shared/models/modalDetailsMovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  modalDetailsMovie: ModalDetailsStatus = null
  constructor(private modalDetailsMovieService: ModalDetailsMovieService) { }

  ngOnInit(): void {
    this.modalDetailsMovieService.getModalStatus().subscribe((status: ModalDetailsStatus) => {
      this.modalDetailsMovie = status
    })
  }
}
