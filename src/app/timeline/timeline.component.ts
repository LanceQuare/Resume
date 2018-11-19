import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocalDataService } from 'src/app/local-data.service';
import { TimelineEvent } from '../timeline-event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  entries: Array<TimelineEvent>;
  public alternate: Boolean = false;
  constructor(private location: Location, private locaDataService: LocalDataService) {
    locaDataService.getWorkingExp()
    .subscribe(resp => {
      this.entries = resp.body;
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
