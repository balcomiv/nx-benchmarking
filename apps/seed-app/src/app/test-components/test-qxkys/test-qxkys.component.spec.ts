import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQXKysComponent } from './test-qxkys.component';

describe('TestQXKysComponent', () => {
  let component: TestQXKysComponent;
  let fixture: ComponentFixture<TestQXKysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQXKysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQXKysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
