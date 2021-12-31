import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonsContextMenuComponent } from './polygons-context-menu.component';

describe('PolygonsContextMenuComponent', () => {
  let component: PolygonsContextMenuComponent;
  let fixture: ComponentFixture<PolygonsContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolygonsContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonsContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
