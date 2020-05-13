import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHeRFjComponent } from './test-he-rfj.component';

describe('TestHeRFjComponent', () => {
  let component: TestHeRFjComponent;
  let fixture: ComponentFixture<TestHeRFjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHeRFjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHeRFjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
