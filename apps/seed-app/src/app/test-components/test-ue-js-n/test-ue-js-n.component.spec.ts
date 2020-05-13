import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUeJsNComponent } from './test-ue-js-n.component';

describe('TestUeJsNComponent', () => {
  let component: TestUeJsNComponent;
  let fixture: ComponentFixture<TestUeJsNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUeJsNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUeJsNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
