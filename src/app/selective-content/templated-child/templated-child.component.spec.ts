import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedChildComponent } from './templated-child.component';

describe('TemplatedChildComponent', () => {
  let component: TemplatedChildComponent;
  let fixture: ComponentFixture<TemplatedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
