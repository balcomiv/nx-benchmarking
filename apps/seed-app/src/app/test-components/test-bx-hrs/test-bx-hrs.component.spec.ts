import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBxHRsComponent } from './test-bx-hrs.component';

describe('TestBxHRsComponent', () => {
  let component: TestBxHRsComponent;
  let fixture: ComponentFixture<TestBxHRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBxHRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBxHRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
