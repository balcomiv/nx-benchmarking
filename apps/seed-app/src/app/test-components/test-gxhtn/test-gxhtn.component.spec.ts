import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGXHtnComponent } from './test-gxhtn.component';

describe('TestGXHtnComponent', () => {
  let component: TestGXHtnComponent;
  let fixture: ComponentFixture<TestGXHtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGXHtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGXHtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
