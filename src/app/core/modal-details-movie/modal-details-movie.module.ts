import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDetailsMovieComponent } from './modal-details-movie.component';
import { SmallButtonActionWatchlistComponent } from './small-button-action-watchlist/small-button-action-watchlist.component';
import { HeaderDetailsMovieComponent } from './header-details-movie/header-details-movie.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { BigButtonActionWatchlistComponent } from './big-button-action-watchlist/big-button-action-watchlist.component';
import { NotificationComponent } from './notification/notification.component';
import {SharedModule} from '../../shared/shared.module'

@NgModule({
  declarations: [ModalDetailsMovieComponent, SmallButtonActionWatchlistComponent, HeaderDetailsMovieComponent, ActorsListComponent, BigButtonActionWatchlistComponent, NotificationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ModalDetailsMovieComponent]
})
export class ModalDetailsMovieModule { }
