import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHKDzlComponent } from './test-hkdzl.component';

describe('TestHKDzlComponent', () => {
  let component: TestHKDzlComponent;
  let fixture: ComponentFixture<TestHKDzlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHKDzlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHKDzlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
