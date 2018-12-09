import { Injectable, Type } from '@angular/core';
import { TimelineEvent } from '@models/timeline-event';
import { ProjectEventComponent } from '../project-event/project-event.component';
import { PersonalEventComponent } from '../personal-event/personal-event.component';

@Injectable({
  providedIn: 'root'
})
export class DetailComponentFactoryService {

  constructor() { }

  public createDetailComponentsFromEvent(event: TimelineEvent): Type<any> {
    if (event.type === 'project') {
      return ProjectEventComponent;
    } else if (event.type === 'personal') {
      return PersonalEventComponent;
    } else {
      return PersonalEventComponent;
    }
  }
}
