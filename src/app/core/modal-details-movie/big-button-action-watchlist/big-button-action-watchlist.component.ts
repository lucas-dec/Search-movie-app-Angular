import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionMessages } from '../../../shared/models/action-messages.enum'
import { ActionType } from '../../../shared/models/action-type.enum'

@Component({
  selector: 'app-big-button-action-watchlist',
  templateUrl: './big-button-action-watchlist.component.html',
  styleUrls: ['./big-button-action-watchlist.component.scss']
})
export class BigButtonActionWatchlistComponent {

  @Input()
  actionType: ActionType

  @Output()
  handleAction = new EventEmitter()

  iconAddToWatchlist = "../../../../assets/icons/addToWatchlist.svg"
  iconRemoveFromWatchlist = "../../../../assets/icons/removeFromWatchlist.svg"

  action() {
    this.handleAction.emit()
  }
}
