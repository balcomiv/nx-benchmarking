import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFDqJxComponent } from './test-f-dq-jx.component';

describe('TestFDqJxComponent', () => {
  let component: TestFDqJxComponent;
  let fixture: ComponentFixture<TestFDqJxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFDqJxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFDqJxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
