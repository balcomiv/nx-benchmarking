import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIWEzSComponent } from './test-i-wez-s.component';

describe('TestIWEzSComponent', () => {
  let component: TestIWEzSComponent;
  let fixture: ComponentFixture<TestIWEzSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIWEzSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIWEzSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
