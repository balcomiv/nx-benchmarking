import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIsMHVComponent } from './test-is-mhv.component';

describe('TestIsMHVComponent', () => {
  let component: TestIsMHVComponent;
  let fixture: ComponentFixture<TestIsMHVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIsMHVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIsMHVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
