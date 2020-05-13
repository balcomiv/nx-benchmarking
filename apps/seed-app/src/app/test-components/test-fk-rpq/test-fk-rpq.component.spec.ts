import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFkRPqComponent } from './test-fk-rpq.component';

describe('TestFkRPqComponent', () => {
  let component: TestFkRPqComponent;
  let fixture: ComponentFixture<TestFkRPqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFkRPqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFkRPqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
