import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBsfmMComponent } from './test-bsfm-m.component';

describe('TestBsfmMComponent', () => {
  let component: TestBsfmMComponent;
  let fixture: ComponentFixture<TestBsfmMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBsfmMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBsfmMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
