import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCUZMnComponent } from './test-c-uzmn.component';

describe('TestCUZMnComponent', () => {
  let component: TestCUZMnComponent;
  let fixture: ComponentFixture<TestCUZMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCUZMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCUZMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
