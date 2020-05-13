import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUKIvCComponent } from './test-ukiv-c.component';

describe('TestUKIvCComponent', () => {
  let component: TestUKIvCComponent;
  let fixture: ComponentFixture<TestUKIvCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUKIvCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUKIvCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
