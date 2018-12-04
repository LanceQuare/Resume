import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() childClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  itemClick() {
    this.childClick.emit(null);
  }

}
