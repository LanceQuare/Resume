import { Component, NgModule, OnInit, NgZone } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animanav', [
      state('show', style({
        'width': '50%',
        'opacity': '1',
        'display': 'block'
      })),
      state('show-mobile', style({
        'width': '100%',
        'opacity': '1',
        'display': 'block'
      })),
      state('dismiss', style({
        'width': '0%',
        'opacity': '0',
        'display': 'none'
      })),
      transition('* => *', animate(250))
    ])
  ]
})
export class AppComponent implements OnInit  {
  title = 'lazzaro-resume';
  animanav = 'dismiss';
  toggle: Boolean = false;
  isMobile: Boolean = false;
  isScreenTop: Boolean = true;

  constructor(private breakpointObserver: BreakpointObserver, private scrollDispatcher: ScrollDispatcher, private zone: NgZone) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    this.scrollDispatcher.scrolled()
    .subscribe((scrollable: CdkScrollable) => {
      this.zone.run(() => {
        if (window.document.scrollingElement.scrollTop === 0) {
          this.isScreenTop = true;
        } else {
          this.isScreenTop = false;
        }
      });
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
