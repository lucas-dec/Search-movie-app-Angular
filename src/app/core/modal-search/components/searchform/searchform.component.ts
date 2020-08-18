import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent {
  searchValue = ""

  constructor(private router: Router) { }

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.router.navigate(['search', this.searchValue])
    e.target.reset()
  }

}
