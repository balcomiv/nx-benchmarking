import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFyIRNComponent } from './test-fy-irn.component';

describe('TestFyIRNComponent', () => {
  let component: TestFyIRNComponent;
  let fixture: ComponentFixture<TestFyIRNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFyIRNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFyIRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
