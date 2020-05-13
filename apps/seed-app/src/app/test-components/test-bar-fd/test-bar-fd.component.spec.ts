import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBarFdComponent } from './test-bar-fd.component';

describe('TestBarFdComponent', () => {
  let component: TestBarFdComponent;
  let fixture: ComponentFixture<TestBarFdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBarFdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBarFdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
