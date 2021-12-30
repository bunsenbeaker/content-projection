import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMultiComponent } from './parent-multi.component';

describe('ParentMultiComponent', () => {
  let component: ParentMultiComponent;
  let fixture: ComponentFixture<ParentMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
