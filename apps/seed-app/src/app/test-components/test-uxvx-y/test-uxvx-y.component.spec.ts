import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUXvxYComponent } from './test-uxvx-y.component';

describe('TestUXvxYComponent', () => {
  let component: TestUXvxYComponent;
  let fixture: ComponentFixture<TestUXvxYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUXvxYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUXvxYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
