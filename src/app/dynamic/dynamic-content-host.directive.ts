import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicContentHost]'
})
export class DynamicContentHostDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
