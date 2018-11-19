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
  animanav: string;
  toggle: Boolean = false;
  public isMobile: Boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
        console.log('match!!');
      } else {
        this.isMobile = false;
        console.log('not match!!');
        // if (window.screen.height > 900) {
        //   this.rowHeight = '900px';
        // }
      }
    });
  }

  navToggle() {
    this.toggle = !this.toggle;
    this.animanav = this.toggle ? 'show' : 'dismiss';
    console.log(this.animanav);
  }
}
