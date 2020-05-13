import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCuerNComponent } from './test-cuer-n.component';

describe('TestCuerNComponent', () => {
  let component: TestCuerNComponent;
  let fixture: ComponentFixture<TestCuerNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCuerNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCuerNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
