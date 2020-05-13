import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQKNhsComponent } from './test-q-knhs.component';

describe('TestQKNhsComponent', () => {
  let component: TestQKNhsComponent;
  let fixture: ComponentFixture<TestQKNhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQKNhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQKNhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
