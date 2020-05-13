import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKjvXTComponent } from './test-kjv-xt.component';

describe('TestKjvXTComponent', () => {
  let component: TestKjvXTComponent;
  let fixture: ComponentFixture<TestKjvXTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKjvXTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKjvXTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
