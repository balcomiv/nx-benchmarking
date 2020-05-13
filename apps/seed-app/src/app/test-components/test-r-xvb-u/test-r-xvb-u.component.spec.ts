import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRXVbUComponent } from './test-r-xvb-u.component';

describe('TestRXVbUComponent', () => {
  let component: TestRXVbUComponent;
  let fixture: ComponentFixture<TestRXVbUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRXVbUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRXVbUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
