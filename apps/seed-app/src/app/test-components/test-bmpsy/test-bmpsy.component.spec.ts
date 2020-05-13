import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBmpsyComponent } from './test-bmpsy.component';

describe('TestBmpsyComponent', () => {
  let component: TestBmpsyComponent;
  let fixture: ComponentFixture<TestBmpsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBmpsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBmpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
