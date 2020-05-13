import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNtgHMComponent } from './test-ntg-hm.component';

describe('TestNtgHMComponent', () => {
  let component: TestNtgHMComponent;
  let fixture: ComponentFixture<TestNtgHMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNtgHMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNtgHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
