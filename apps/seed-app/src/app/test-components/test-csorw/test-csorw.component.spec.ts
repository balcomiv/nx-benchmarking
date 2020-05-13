import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCsorwComponent } from './test-csorw.component';

describe('TestCsorwComponent', () => {
  let component: TestCsorwComponent;
  let fixture: ComponentFixture<TestCsorwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCsorwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCsorwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
