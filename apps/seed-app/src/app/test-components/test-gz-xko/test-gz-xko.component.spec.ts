import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGzXkoComponent } from './test-gz-xko.component';

describe('TestGzXkoComponent', () => {
  let component: TestGzXkoComponent;
  let fixture: ComponentFixture<TestGzXkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGzXkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGzXkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
