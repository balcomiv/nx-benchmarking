import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXojLCComponent } from './test-xoj-lc.component';

describe('TestXojLCComponent', () => {
  let component: TestXojLCComponent;
  let fixture: ComponentFixture<TestXojLCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXojLCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXojLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
