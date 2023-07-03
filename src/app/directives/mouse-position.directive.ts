import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMousePosition]'
})
export class MousePositionDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter', ['$event'])
  async onMouseMove(event: any) {
    if (!this.element.nativeElement.parentNode.classList.contains('center')) {
      if (event.clientX < document?.documentElement.clientWidth / 2) {
        this.element.nativeElement.classList.remove("right");
        this.element.nativeElement.classList.add('left');
      }
      else {
        this.element.nativeElement.classList.remove("left");
        this.element.nativeElement.classList.add('right');
      }
      return;
    }
  }
}
