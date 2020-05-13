import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLDFgCComponent } from './test-l-dfg-c.component';

describe('TestLDFgCComponent', () => {
  let component: TestLDFgCComponent;
  let fixture: ComponentFixture<TestLDFgCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLDFgCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLDFgCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
