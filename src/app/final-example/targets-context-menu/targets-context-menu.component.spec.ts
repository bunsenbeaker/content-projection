import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsContextMenuComponent } from './targets-context-menu.component';

describe('TargetsContextMenuComponent', () => {
  let component: TargetsContextMenuComponent;
  let fixture: ComponentFixture<TargetsContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetsContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetsContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
