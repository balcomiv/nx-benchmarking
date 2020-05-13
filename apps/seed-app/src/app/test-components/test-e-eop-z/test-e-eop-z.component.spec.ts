import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEEopZComponent } from './test-e-eop-z.component';

describe('TestEEopZComponent', () => {
  let component: TestEEopZComponent;
  let fixture: ComponentFixture<TestEEopZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEEopZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEEopZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
