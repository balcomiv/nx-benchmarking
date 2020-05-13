import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCrNyWComponent } from './test-cr-ny-w.component';

describe('TestCrNyWComponent', () => {
  let component: TestCrNyWComponent;
  let fixture: ComponentFixture<TestCrNyWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCrNyWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCrNyWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
