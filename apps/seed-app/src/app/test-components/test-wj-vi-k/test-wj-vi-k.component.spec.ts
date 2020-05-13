import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWjViKComponent } from './test-wj-vi-k.component';

describe('TestWjViKComponent', () => {
  let component: TestWjViKComponent;
  let fixture: ComponentFixture<TestWjViKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWjViKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWjViKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
