import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOqpoCComponent } from './test-oqpo-c.component';

describe('TestOqpoCComponent', () => {
  let component: TestOqpoCComponent;
  let fixture: ComponentFixture<TestOqpoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOqpoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOqpoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
