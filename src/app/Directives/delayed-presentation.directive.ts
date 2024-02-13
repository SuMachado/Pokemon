import { Directive, TemplateRef, ViewContainerRef, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appDelayedPresentation]'
})
export class DelayedPresentationDirective {

  time: number = 0;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  @Input() set appDelayedPresentation(delayTime: number) {
    this.time = delayTime;
  }

ngOnInit() {
  setTimeout(() => {
    this.container.createEmbeddedView(this.template);
  }, this.time);
}
}
