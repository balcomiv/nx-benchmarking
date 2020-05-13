import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmCgJComponent } from './test-em-cg-j.component';

describe('TestEmCgJComponent', () => {
  let component: TestEmCgJComponent;
  let fixture: ComponentFixture<TestEmCgJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEmCgJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEmCgJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
