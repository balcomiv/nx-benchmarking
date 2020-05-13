import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSulQZComponent } from './test-sul-qz.component';

describe('TestSulQZComponent', () => {
  let component: TestSulQZComponent;
  let fixture: ComponentFixture<TestSulQZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSulQZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSulQZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
