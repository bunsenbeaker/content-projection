import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-parent',
  templateUrl: './nested-parent.component.html',
  styleUrls: ['./nested-parent.component.scss']
})
export class NestedParentComponent implements OnInit {

  counter:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  btnClicked():void {
    this.counter++;
  }
}
