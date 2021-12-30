import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustomButton]'
})
export class CustomButtonDirective {

  constructor(public template:TemplateRef<any>) { }

}
