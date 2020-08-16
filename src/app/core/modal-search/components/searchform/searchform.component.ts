import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent implements OnInit {

  searchValue = ""

  handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(this.searchValue);

  }
  constructor() { }

  ngOnInit(): void {
  }
}
