import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimelineContecnt]'
})
export class TimelineContecntDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
