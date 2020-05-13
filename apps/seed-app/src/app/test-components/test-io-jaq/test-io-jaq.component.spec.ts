import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIoJAQComponent } from './test-io-jaq.component';

describe('TestIoJAQComponent', () => {
  let component: TestIoJAQComponent;
  let fixture: ComponentFixture<TestIoJAQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIoJAQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIoJAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
