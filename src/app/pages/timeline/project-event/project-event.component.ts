import { Component, OnInit, Input } from '@angular/core';
import { TimelineDetail } from '../timeline-detail';
import { ProjectEvent } from '@models/timeline-event';

@Component({
  selector: 'app-project-event',
  templateUrl: './project-event.component.html',
  styleUrls: ['./project-event.component.css']
})
export class ProjectEventComponent implements OnInit, TimelineDetail {
  @Input() data: ProjectEvent;

  constructor() { }

  ngOnInit() {
  }

}
