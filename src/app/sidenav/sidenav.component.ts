import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('anima-show', [
      state('show', style({
        'background-color': 'green'
      })),
      state('dismiss', style({
        'background-color': 'green'
      }))
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
