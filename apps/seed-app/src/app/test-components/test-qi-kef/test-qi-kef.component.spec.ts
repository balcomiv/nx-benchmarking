import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQiKefComponent } from './test-qi-kef.component';

describe('TestQiKefComponent', () => {
  let component: TestQiKefComponent;
  let fixture: ComponentFixture<TestQiKefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQiKefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQiKefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
