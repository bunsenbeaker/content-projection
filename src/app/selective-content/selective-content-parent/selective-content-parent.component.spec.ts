import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiveContentParentComponent } from './selective-content-parent.component';

describe('SelectiveContentParentComponent', () => {
  let component: SelectiveContentParentComponent;
  let fixture: ComponentFixture<SelectiveContentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectiveContentParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectiveContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
