import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public coverRow: Number = 2;
  public introRow: Number = 2;
  public rowHeight: String = '1:4';
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
    .observe([Breakpoints.HandsetPortrait])
    .subscribe(result => {
      if (result.matches) {
        this.coverRow = 4;
        this.introRow = 4;
        this.rowHeight = '1:4';
        console.log('a');
      } else {
        this.coverRow = 2;
        this.introRow = 2;
        this.rowHeight = document.documentElement.clientHeight + 'px';
        // if (document.documentElement.clientHeight > 900) {
        //   console.log('b');
        // } else {
        //   this.rowHeight = '1:4';
        //   console.log('c');
        // }
      }
    });
   }

  ngOnInit() {
  }

}
