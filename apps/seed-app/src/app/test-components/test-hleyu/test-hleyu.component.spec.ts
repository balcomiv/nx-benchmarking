import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHLEYUComponent } from './test-hleyu.component';

describe('TestHLEYUComponent', () => {
  let component: TestHLEYUComponent;
  let fixture: ComponentFixture<TestHLEYUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHLEYUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHLEYUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
