import { Component, Input, OnInit, Output,EventEmitter, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templated-child',
  templateUrl: './templated-child.component.html',
  styleUrls: ['./templated-child.component.scss']
})
export class TemplatedChildComponent implements OnInit {

  @Input() name:string;
  @Output() childClicked:EventEmitter<string>=new EventEmitter();

	@ViewChild(TemplateRef, { static: true }) template: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
