import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestARQNAComponent } from './test-a-rqna.component';

describe('TestARQNAComponent', () => {
  let component: TestARQNAComponent;
  let fixture: ComponentFixture<TestARQNAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestARQNAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestARQNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
