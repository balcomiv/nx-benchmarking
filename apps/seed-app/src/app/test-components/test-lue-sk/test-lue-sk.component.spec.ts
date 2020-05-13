import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLueSkComponent } from './test-lue-sk.component';

describe('TestLueSkComponent', () => {
  let component: TestLueSkComponent;
  let fixture: ComponentFixture<TestLueSkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLueSkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLueSkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
