import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  actorsArr: string[];

  @Input()
  actors: string;

  ngOnInit() {
    this.actorsArr = this.actors.split(",")
  }

}
