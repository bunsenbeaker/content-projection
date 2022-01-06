import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';
import { ParentComponent } from './single-slot/parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';
import { ParentMultiComponent } from './multi-slot/parent-multi/parent-multi.component';
import { ContentChildrenComponent } from './content-children/content-children.component';
import { CustomButtonDirective } from './content-children/custom-button.directive';
import { PlayerComponent } from './content-children/player/player.component';
import { SelectiveContentComponent } from './selective-content/selective-content.component';
import { SelectiveContentParentComponent } from './selective-content/selective-content-parent/selective-content-parent.component';
import { NamedContentDirective } from './selective-content/tagged-content.directive';
import { TemplatedChildComponent } from './selective-content/templated-child/templated-child.component';
import { NestedComponent } from './nested/nested.component';
import { NestedParentComponent } from './nested/nested-parent/nested-parent.component';
import { NestedChildComponent } from './nested/nested-child/nested-child.component';
import { InnerChildComponent } from './nested/inner-child/inner-child.component';


const routes: Routes = [
  {
    path: 'single-slot',
    component: SingleSlotComponent
  },
  {
    path: 'multi-slot',
    component: MultiSlotComponent
  },
  {
    path: 'content-children',
    component: ContentChildrenComponent
  },
  {
    path: 'selective',
    component: SelectiveContentComponent
  },
  {
    path: 'nested',
    component: NestedComponent
  }
]; 

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    ParentMultiComponent,
    ContentChildrenComponent,
    CustomButtonDirective,
    PlayerComponent,
    SelectiveContentComponent,
    SelectiveContentParentComponent,
    NamedContentDirective,
    TemplatedChildComponent,
    NestedComponent,
    NestedParentComponent,
    NestedChildComponent,
    InnerChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
