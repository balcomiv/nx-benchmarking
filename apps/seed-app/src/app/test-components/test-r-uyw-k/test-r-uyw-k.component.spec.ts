import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRUYwKComponent } from './test-r-uyw-k.component';

describe('TestRUYwKComponent', () => {
  let component: TestRUYwKComponent;
  let fixture: ComponentFixture<TestRUYwKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRUYwKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRUYwKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
