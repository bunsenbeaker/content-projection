import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selective-content',
  templateUrl: './selective-content.component.html',
  styleUrls: ['./selective-content.component.scss']
})
export class SelectiveContentComponent implements OnInit {

  clicked_child:string = "???";

  constructor() { }

  ngOnInit(): void {
  }

}
