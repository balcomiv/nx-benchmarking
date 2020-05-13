import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRgzAxComponent } from './test-rgz-ax.component';

describe('TestRgzAxComponent', () => {
  let component: TestRgzAxComponent;
  let fixture: ComponentFixture<TestRgzAxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRgzAxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRgzAxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
