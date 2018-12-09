import { Component, OnInit, Input } from '@angular/core';
import { TimelineDetail } from '../timeline-detail';
import { PersonalEvent } from '@models/timeline-event';

@Component({
  selector: 'app-personal-event',
  templateUrl: './personal-event.component.html',
  styleUrls: ['./personal-event.component.css']
})
export class PersonalEventComponent implements OnInit, TimelineDetail {
  @Input() data: PersonalEvent;

  constructor() { }

  ngOnInit() {
  }

}
