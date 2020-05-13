import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBVQChComponent } from './test-b-vqch.component';

describe('TestBVQChComponent', () => {
  let component: TestBVQChComponent;
  let fixture: ComponentFixture<TestBVQChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBVQChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBVQChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
