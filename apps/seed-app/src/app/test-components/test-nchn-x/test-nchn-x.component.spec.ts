import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNCHnXComponent } from './test-nchn-x.component';

describe('TestNCHnXComponent', () => {
  let component: TestNCHnXComponent;
  let fixture: ComponentFixture<TestNCHnXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNCHnXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNCHnXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
