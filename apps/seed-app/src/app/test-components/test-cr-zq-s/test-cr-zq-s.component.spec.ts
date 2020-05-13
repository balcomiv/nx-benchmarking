import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCrZqSComponent } from './test-cr-zq-s.component';

describe('TestCrZqSComponent', () => {
  let component: TestCrZqSComponent;
  let fixture: ComponentFixture<TestCrZqSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCrZqSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCrZqSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
