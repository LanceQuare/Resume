import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { LocalDataService } from '@services/local-data.service';
import { TimelineEvent } from '@models/timeline-event';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  entries: Array<TimelineEvent>;
  public alternate: Boolean = false;
  public isMobile: Boolean = false;

  constructor(private location: Location, private locaDataService: LocalDataService, breakpointObserver: BreakpointObserver) {
    locaDataService.getWorkingExp()
    .subscribe(resp => {
      this.entries = resp.body;
    });

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

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  onHeaderClick(event) {
    // do something
  }

  onDotClick(event) {
    // do something
  }

  onExpandEntry(expanded, index) {
    // console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

}
