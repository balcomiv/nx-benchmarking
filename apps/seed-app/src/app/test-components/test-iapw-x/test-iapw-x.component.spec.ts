import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIAPwXComponent } from './test-iapw-x.component';

describe('TestIAPwXComponent', () => {
  let component: TestIAPwXComponent;
  let fixture: ComponentFixture<TestIAPwXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIAPwXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIAPwXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
