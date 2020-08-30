import { Injectable } from '@angular/core';
import { ModalDetailsStatus } from '../../shared/models/modalDetailsMovie'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDetailsMovieService {

  private modalDetailsMovie = new BehaviorSubject<ModalDetailsStatus>({
    isOpen: false,
    idMovie: null
  })

  constructor() {
    this.modalDetailsMovie.next({
      isOpen: false,
      idMovie: null
    })
  }

  getModalStatus(): BehaviorSubject<ModalDetailsStatus> {
    return this.modalDetailsMovie
  }

  openModal(idMovie: string) {
    this.modalDetailsMovie.next({
      isOpen: true,
      idMovie: idMovie
    })
  }

  closeModal() {
    this.modalDetailsMovie.next({
      isOpen: false,
      idMovie: null
    })
  }
}
