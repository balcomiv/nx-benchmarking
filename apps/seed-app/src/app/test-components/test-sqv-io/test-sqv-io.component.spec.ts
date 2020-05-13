import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSqvIOComponent } from './test-sqv-io.component';

describe('TestSqvIOComponent', () => {
  let component: TestSqvIOComponent;
  let fixture: ComponentFixture<TestSqvIOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSqvIOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSqvIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
