import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNjtXTComponent } from './test-njt-xt.component';

describe('TestNjtXTComponent', () => {
  let component: TestNjtXTComponent;
  let fixture: ComponentFixture<TestNjtXTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNjtXTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNjtXTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
