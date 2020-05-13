import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJnAfIComponent } from './test-jn-af-i.component';

describe('TestJnAfIComponent', () => {
  let component: TestJnAfIComponent;
  let fixture: ComponentFixture<TestJnAfIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJnAfIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJnAfIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
