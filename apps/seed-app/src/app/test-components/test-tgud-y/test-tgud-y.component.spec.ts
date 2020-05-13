import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTGUdYComponent } from './test-tgud-y.component';

describe('TestTGUdYComponent', () => {
  let component: TestTGUdYComponent;
  let fixture: ComponentFixture<TestTGUdYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTGUdYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTGUdYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
