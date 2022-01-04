import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from 'src/app/child/child.component';
import { NamedContentDirective } from '../tagged-content.directive';
import { TemplatedChildComponent } from '../templated-child/templated-child.component';

@Component({
  selector: 'app-selective-content-parent',
  templateUrl: './selective-content-parent.component.html',
  styleUrls: ['./selective-content-parent.component.scss']
})
export class SelectiveContentParentComponent implements OnInit, AfterContentInit {

  @ContentChildren(NamedContentDirective) childrenByTag:QueryList<NamedContentDirective>;
  @ContentChildren(TemplatedChildComponent) children:QueryList<TemplatedChildComponent>;


  clicked_child:string = "Who Cares???";
  selectedChildTemplate:TemplateRef<any>;

  constructor() { }

 

  ngAfterContentInit(): void {
    this.children.forEach(c=> {
      c.childClicked.subscribe(n=> {
        this.clicked_child=n;
      });
    });
  }

  

  ngOnInit(): void {
  }



  loadContentByTag(tag:string):void {
    
    const child:NamedContentDirective = this.childrenByTag.find(c=>c.tag===tag);
    
    if (child) {
      this.selectedChildTemplate = child.template;
    }
  }

  loadContentByName(name:string):void {
    const child:TemplatedChildComponent = this.children.find(c=>c.name===name);
    if (child) {
      this.selectedChildTemplate=child.template;
    }
  }
}
