import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCbcFBComponent } from './test-cbc-fb.component';

describe('TestCbcFBComponent', () => {
  let component: TestCbcFBComponent;
  let fixture: ComponentFixture<TestCbcFBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCbcFBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCbcFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
