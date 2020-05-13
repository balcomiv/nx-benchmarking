import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJkfLJComponent } from './test-jkf-lj.component';

describe('TestJkfLJComponent', () => {
  let component: TestJkfLJComponent;
  let fixture: ComponentFixture<TestJkfLJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJkfLJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJkfLJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
