import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQSeDaComponent } from './test-qse-da.component';

describe('TestQSeDaComponent', () => {
  let component: TestQSeDaComponent;
  let fixture: ComponentFixture<TestQSeDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQSeDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQSeDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
