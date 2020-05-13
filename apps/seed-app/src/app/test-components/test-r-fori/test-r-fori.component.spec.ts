import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRFORIComponent } from './test-r-fori.component';

describe('TestRFORIComponent', () => {
  let component: TestRFORIComponent;
  let fixture: ComponentFixture<TestRFORIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRFORIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRFORIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
