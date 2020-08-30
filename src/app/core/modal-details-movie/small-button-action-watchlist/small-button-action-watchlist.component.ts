import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionType } from '../../../shared/models/action-type.enum'

@Component({
  selector: 'app-small-button-action-watchlist',
  templateUrl: './small-button-action-watchlist.component.html',
  styleUrls: ['./small-button-action-watchlist.component.scss']
})
export class SmallButtonActionWatchlistComponent implements OnInit {

  @Input()
  actionType
  @Output()
  handleAction = new EventEmitter()

  iconAddToWatchlist = "../../../../assets/icons/addToWatchlist.svg"
  iconRemoveFromWatchlist = "../../../../assets/icons/removeFromWatchlist.svg"

  constructor() { }

  ngOnInit(): void {
  }

  action() {
    this.handleAction.emit()
  }
}
