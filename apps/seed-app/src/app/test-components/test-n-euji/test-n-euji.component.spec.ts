import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNEUJIComponent } from './test-n-euji.component';

describe('TestNEUJIComponent', () => {
  let component: TestNEUJIComponent;
  let fixture: ComponentFixture<TestNEUJIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNEUJIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNEUJIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
