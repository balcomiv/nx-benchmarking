import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIoZtqComponent } from './test-io-ztq.component';

describe('TestIoZtqComponent', () => {
  let component: TestIoZtqComponent;
  let fixture: ComponentFixture<TestIoZtqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIoZtqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIoZtqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
