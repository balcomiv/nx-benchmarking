import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSuHhIComponent } from './test-su-hh-i.component';

describe('TestSuHhIComponent', () => {
  let component: TestSuHhIComponent;
  let fixture: ComponentFixture<TestSuHhIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSuHhIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSuHhIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
