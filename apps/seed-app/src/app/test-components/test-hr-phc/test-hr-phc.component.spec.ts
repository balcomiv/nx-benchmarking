import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHrPhcComponent } from './test-hr-phc.component';

describe('TestHrPhcComponent', () => {
  let component: TestHrPhcComponent;
  let fixture: ComponentFixture<TestHrPhcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHrPhcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHrPhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
