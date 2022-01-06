import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-child',
  templateUrl: './nested-child.component.html',
  styleUrls: ['./nested-child.component.scss']
})
export class NestedChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
