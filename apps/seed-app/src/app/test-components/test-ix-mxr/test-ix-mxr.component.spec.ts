import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIxMXRComponent } from './test-ix-mxr.component';

describe('TestIxMXRComponent', () => {
  let component: TestIxMXRComponent;
  let fixture: ComponentFixture<TestIxMXRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIxMXRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIxMXRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
