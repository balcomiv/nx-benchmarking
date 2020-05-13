import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDnorgComponent } from './test-dnorg.component';

describe('TestDnorgComponent', () => {
  let component: TestDnorgComponent;
  let fixture: ComponentFixture<TestDnorgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDnorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDnorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
