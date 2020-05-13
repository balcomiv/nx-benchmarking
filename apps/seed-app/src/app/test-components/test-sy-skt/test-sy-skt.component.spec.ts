import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSySKTComponent } from './test-sy-skt.component';

describe('TestSySKTComponent', () => {
  let component: TestSySKTComponent;
  let fixture: ComponentFixture<TestSySKTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSySKTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSySKTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
