import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKphYtComponent } from './test-kph-yt.component';

describe('TestKphYtComponent', () => {
  let component: TestKphYtComponent;
  let fixture: ComponentFixture<TestKphYtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKphYtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKphYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
