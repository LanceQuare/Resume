import { Component, NgModule } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animanav', [
      state('show', style({
        'width': '50%',
        'opacity': '1'
      })),
      state('show-mobile', style({
        'width': '100%',
        'opacity': '1'
      })),
      state('dismiss', style({
        'width': '0%',
        'opacity': '0'
      })),
      transition('* => *', animate(250))
    ])
  ]
})
export class AppComponent {
  title = 'lazzaro-resume';
  animanav = 'dismiss';
  toggle: Boolean = false;
  public isMobile: Boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  navToggle() {
    this.toggle = !this.toggle;
    if (this.isMobile) {
      this.animanav = this.toggle ? 'show-mobile' : 'dismiss';
    } else {
      this.animanav = this.toggle ? 'show' : 'dismiss';
    }
  }
}
