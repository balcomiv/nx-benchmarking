import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTieJLComponent } from './test-tie-jl.component';

describe('TestTieJLComponent', () => {
  let component: TestTieJLComponent;
  let fixture: ComponentFixture<TestTieJLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTieJLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTieJLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
