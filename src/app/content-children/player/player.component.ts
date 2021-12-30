import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CustomButtonDirective } from '../custom-button.directive';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @ContentChildren(CustomButtonDirective)
	customButtons: QueryList<CustomButtonDirective>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
