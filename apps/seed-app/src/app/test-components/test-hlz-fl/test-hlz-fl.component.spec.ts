import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHlzFLComponent } from './test-hlz-fl.component';

describe('TestHlzFLComponent', () => {
  let component: TestHlzFLComponent;
  let fixture: ComponentFixture<TestHlzFLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHlzFLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHlzFLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
