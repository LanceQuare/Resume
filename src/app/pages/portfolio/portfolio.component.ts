import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public introRow: Number = 2;
  public rowHeight: Number | String = 627;
  public listRow: Number = 2;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
    .observe([Breakpoints.HandsetPortrait])
    .subscribe(result => {
      if (result.matches) {
        this.introRow = 5;
        this.listRow = 5;
        this.rowHeight = '1:5';
      } else {
        this.introRow = 2;
        this.listRow = 3;
        this.rowHeight = 627;
      }
    });
   }

  ngOnInit() {
  }

}
