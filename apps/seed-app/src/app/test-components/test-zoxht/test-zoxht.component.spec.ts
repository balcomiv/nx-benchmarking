import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZoxhtComponent } from './test-zoxht.component';

describe('TestZoxhtComponent', () => {
  let component: TestZoxhtComponent;
  let fixture: ComponentFixture<TestZoxhtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZoxhtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZoxhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
