import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCGmnrComponent } from './test-c-gmnr.component';

describe('TestCGmnrComponent', () => {
  let component: TestCGmnrComponent;
  let fixture: ComponentFixture<TestCGmnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCGmnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCGmnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
