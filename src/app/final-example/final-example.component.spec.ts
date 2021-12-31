import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalExampleComponent } from './final-example.component';

describe('FinalExampleComponent', () => {
  let component: FinalExampleComponent;
  let fixture: ComponentFixture<FinalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
