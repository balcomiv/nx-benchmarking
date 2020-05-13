import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMStWfComponent } from './test-m-st-wf.component';

describe('TestMStWfComponent', () => {
  let component: TestMStWfComponent;
  let fixture: ComponentFixture<TestMStWfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMStWfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMStWfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
