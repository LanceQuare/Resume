import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSidemenuColor]'
})
export class SidemenuColorDirective implements OnChanges {
  @Input() sidemenuContent: Boolean;
  @Input() sidemenuMobile: Boolean;
  @Input() sidemenuScreenTop: Boolean;

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnChanges(): void {
    console.log('sct: ' + this.sidemenuScreenTop);
    if (this.sidemenuContent) {
      if (!this.sidemenuMobile && this.sidemenuScreenTop) {
        this.renderer2.removeClass(this.el.nativeElement, 'nav-bar-item-mobile');
        this.renderer2.addClass(this.el.nativeElement, 'nav-bar-item');
      } else {
        this.renderer2.removeClass(this.el.nativeElement, 'nav-bar-item');
        this.renderer2.addClass(this.el.nativeElement, 'nav-bar-item-mobile');
      }
    } else {
      if (!this.sidemenuMobile && this.sidemenuScreenTop) {
        this.renderer2.removeClass(this.el.nativeElement, 'black-bg');
        this.renderer2.addClass(this.el.nativeElement, 'normal-bg');
      } else {
        this.renderer2.removeClass(this.el.nativeElement, 'normal-bg');
        this.renderer2.addClass(this.el.nativeElement, 'black-bg');
      }
    }
  }
}
