import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQfEVmComponent } from './test-qf-evm.component';

describe('TestQfEVmComponent', () => {
  let component: TestQfEVmComponent;
  let fixture: ComponentFixture<TestQfEVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQfEVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQfEVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
