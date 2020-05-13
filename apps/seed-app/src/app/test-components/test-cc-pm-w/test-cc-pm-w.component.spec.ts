import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCcPmWComponent } from './test-cc-pm-w.component';

describe('TestCcPmWComponent', () => {
  let component: TestCcPmWComponent;
  let fixture: ComponentFixture<TestCcPmWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCcPmWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCcPmWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
