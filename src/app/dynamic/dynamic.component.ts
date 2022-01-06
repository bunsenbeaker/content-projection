import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, forwardRef, OnInit, Type, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DynamicContentHostDirective } from './dynamic-content-host.directive';
import { DynamicParentComponent } from './dynamic-parent/dynamic-parent.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  counter:number = 0;

  @ViewChild(DynamicContentHostDirective) contentHost:DynamicContentHostDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  createDynamicComponents():void {

    const parentFactory:ComponentFactory<DynamicParentComponent> = this.componentFactoryResolver.resolveComponentFactory(DynamicParentComponent);
    const childFactory:ComponentFactory<ChildComponent> = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);

    const viewContainer = this.contentHost?.viewContainerRef;

    const child1:ComponentRef<ChildComponent> = viewContainer.createComponent(childFactory);
    child1.instance.name='ChIld 1';
    child1.instance.childClicked.subscribe(c=> {
      this.counter++;
    });
    const child2:ComponentRef<ChildComponent> = viewContainer.createComponent(childFactory);
    child2.instance.name='ChIld 2';
    child2.instance.childClicked.subscribe(c=> {
      this.counter++;
    });
    const parent:ComponentRef<DynamicParentComponent> = viewContainer.createComponent(parentFactory,null,undefined,[[child1.location.nativeElement, child2.location.nativeElement]]);
    






  }


}
