import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJsFIAComponent } from './test-js-fia.component';

describe('TestJsFIAComponent', () => {
  let component: TestJsFIAComponent;
  let fixture: ComponentFixture<TestJsFIAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJsFIAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJsFIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
