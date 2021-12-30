import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CustomButtonDirective } from './custom-button.directive';

@Component({
  selector: 'app-content-children',
  templateUrl: './content-children.component.html',
  styleUrls: ['./content-children.component.scss']
})
export class ContentChildrenComponent implements OnInit {

  clicked:number;
 

  constructor() { }

  ngOnInit(): void {
  }

}
