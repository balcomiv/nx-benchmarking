import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQxUXSComponent } from './test-qx-uxs.component';

describe('TestQxUXSComponent', () => {
  let component: TestQxUXSComponent;
  let fixture: ComponentFixture<TestQxUXSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQxUXSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQxUXSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
