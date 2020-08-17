import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent {

  @Output()
  searchedValue: EventEmitter<string> = new EventEmitter<string>();

  searchValue = ""

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.searchedValue.emit(this.searchValue);
  }

}
