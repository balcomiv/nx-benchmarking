import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRDgtAComponent } from './test-r-dgt-a.component';

describe('TestRDgtAComponent', () => {
  let component: TestRDgtAComponent;
  let fixture: ComponentFixture<TestRDgtAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRDgtAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRDgtAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
