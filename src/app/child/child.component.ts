import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name:string = '???';
  @Output() childClicked:EventEmitter<string>=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  clicked(evt):void {
    this.childClicked.emit(this.name);
  }

}
