import { TimelineDetail } from './../timeline-detail';
import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { TimelineContecntDirective } from '@directives/timeline-contecnt.directive';
import { TimelineEvent } from '@models/timeline-event';
import { DetailComponentFactoryService } from './detail-component-factory.service';

@Component({
  selector: 'app-timeline-event',
  templateUrl: './timeline-event.component.html',
  styleUrls: ['./timeline-event.component.css']
})
export class TimelineEventComponent implements OnInit {
  @ViewChild(TimelineContecntDirective) timelineEvent: TimelineContecntDirective;
  @Input() data: TimelineEvent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    const factory = new DetailComponentFactoryService();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(factory.createDetailComponentsFromEvent(this.data));
    const viewContainerRef = this.timelineEvent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TimelineDetail>componentRef.instance).data = this.data.detail;
  }

}
