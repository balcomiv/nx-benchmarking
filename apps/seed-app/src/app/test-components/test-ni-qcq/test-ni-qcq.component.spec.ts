import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNiQcqComponent } from './test-ni-qcq.component';

describe('TestNiQcqComponent', () => {
  let component: TestNiQcqComponent;
  let fixture: ComponentFixture<TestNiQcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNiQcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNiQcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
