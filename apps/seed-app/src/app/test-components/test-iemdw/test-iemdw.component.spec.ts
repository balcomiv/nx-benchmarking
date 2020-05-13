import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIemdwComponent } from './test-iemdw.component';

describe('TestIemdwComponent', () => {
  let component: TestIemdwComponent;
  let fixture: ComponentFixture<TestIemdwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIemdwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIemdwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
