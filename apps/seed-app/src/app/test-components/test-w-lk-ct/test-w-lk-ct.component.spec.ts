import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWLkCtComponent } from './test-w-lk-ct.component';

describe('TestWLkCtComponent', () => {
  let component: TestWLkCtComponent;
  let fixture: ComponentFixture<TestWLkCtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWLkCtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWLkCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
