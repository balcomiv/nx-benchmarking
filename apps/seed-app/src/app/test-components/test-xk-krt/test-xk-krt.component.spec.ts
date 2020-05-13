import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXkKRtComponent } from './test-xk-krt.component';

describe('TestXkKRtComponent', () => {
  let component: TestXkKRtComponent;
  let fixture: ComponentFixture<TestXkKRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXkKRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXkKRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
