import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHjbiXComponent } from './test-hjbi-x.component';

describe('TestHjbiXComponent', () => {
  let component: TestHjbiXComponent;
  let fixture: ComponentFixture<TestHjbiXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHjbiXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHjbiXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
