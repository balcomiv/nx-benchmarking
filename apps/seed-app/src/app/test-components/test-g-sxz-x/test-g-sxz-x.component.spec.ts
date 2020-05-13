import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGSxzXComponent } from './test-g-sxz-x.component';

describe('TestGSxzXComponent', () => {
  let component: TestGSxzXComponent;
  let fixture: ComponentFixture<TestGSxzXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGSxzXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGSxzXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
