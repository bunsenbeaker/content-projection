import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTaggedContent]'
})
export class NamedContentDirective {

  @Input('appTaggedContent') tag:string;
  
  constructor(public template:TemplateRef<any>) { }

}
