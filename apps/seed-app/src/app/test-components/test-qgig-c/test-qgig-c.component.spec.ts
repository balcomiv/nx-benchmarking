import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQGigCComponent } from './test-qgig-c.component';

describe('TestQGigCComponent', () => {
  let component: TestQGigCComponent;
  let fixture: ComponentFixture<TestQGigCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQGigCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQGigCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
