import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCutSWComponent } from './test-cut-sw.component';

describe('TestCutSWComponent', () => {
  let component: TestCutSWComponent;
  let fixture: ComponentFixture<TestCutSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCutSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCutSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
