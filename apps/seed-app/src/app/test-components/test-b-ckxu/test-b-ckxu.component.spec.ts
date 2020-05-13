import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBCKXUComponent } from './test-b-ckxu.component';

describe('TestBCKXUComponent', () => {
  let component: TestBCKXUComponent;
  let fixture: ComponentFixture<TestBCKXUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBCKXUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBCKXUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
