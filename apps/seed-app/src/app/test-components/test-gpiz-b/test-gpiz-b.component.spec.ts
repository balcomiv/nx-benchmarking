import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGPizBComponent } from './test-gpiz-b.component';

describe('TestGPizBComponent', () => {
  let component: TestGPizBComponent;
  let fixture: ComponentFixture<TestGPizBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGPizBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGPizBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
