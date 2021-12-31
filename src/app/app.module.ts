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
import { FinalExampleComponent } from './final-example/final-example.component';
import { MapComponent } from './final-example/map/map.component';
import { TargetsContextMenuComponent } from './final-example/targets-context-menu/targets-context-menu.component';
import { PolygonsContextMenuComponent } from './final-example/polygons-context-menu/polygons-context-menu.component';
import { PolygonComponent } from './final-example/polygon/polygon.component';
import { TargetComponent } from './final-example/target/target.component';


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
    path: 'final',
    component: FinalExampleComponent
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
    FinalExampleComponent,
    MapComponent,
    TargetsContextMenuComponent,
    PolygonsContextMenuComponent,
    PolygonComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
