import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMQBjdComponent } from './test-mqbjd.component';

describe('TestMQBjdComponent', () => {
  let component: TestMQBjdComponent;
  let fixture: ComponentFixture<TestMQBjdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMQBjdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMQBjdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
