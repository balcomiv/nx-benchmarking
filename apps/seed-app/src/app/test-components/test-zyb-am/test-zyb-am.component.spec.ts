import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZybAMComponent } from './test-zyb-am.component';

describe('TestZybAMComponent', () => {
  let component: TestZybAMComponent;
  let fixture: ComponentFixture<TestZybAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZybAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZybAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
