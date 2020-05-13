import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSZMqUComponent } from './test-s-zmq-u.component';

describe('TestSZMqUComponent', () => {
  let component: TestSZMqUComponent;
  let fixture: ComponentFixture<TestSZMqUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSZMqUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSZMqUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
