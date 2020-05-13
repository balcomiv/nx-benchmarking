import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJcZKYComponent } from './test-jc-zky.component';

describe('TestJcZKYComponent', () => {
  let component: TestJcZKYComponent;
  let fixture: ComponentFixture<TestJcZKYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJcZKYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJcZKYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
