import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRhbWLComponent } from './test-rhb-wl.component';

describe('TestRhbWLComponent', () => {
  let component: TestRhbWLComponent;
  let fixture: ComponentFixture<TestRhbWLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRhbWLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRhbWLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
