import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRdONwComponent } from './test-rd-onw.component';

describe('TestRdONwComponent', () => {
  let component: TestRdONwComponent;
  let fixture: ComponentFixture<TestRdONwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRdONwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRdONwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
