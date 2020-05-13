import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCvRGuComponent } from './test-cv-rgu.component';

describe('TestCvRGuComponent', () => {
  let component: TestCvRGuComponent;
  let fixture: ComponentFixture<TestCvRGuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCvRGuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCvRGuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
