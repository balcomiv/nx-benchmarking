import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWcEsmComponent } from './test-wc-esm.component';

describe('TestWcEsmComponent', () => {
  let component: TestWcEsmComponent;
  let fixture: ComponentFixture<TestWcEsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWcEsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWcEsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
