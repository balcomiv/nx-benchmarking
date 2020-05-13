import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUOTHQComponent } from './test-uothq.component';

describe('TestUOTHQComponent', () => {
  let component: TestUOTHQComponent;
  let fixture: ComponentFixture<TestUOTHQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUOTHQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUOTHQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
