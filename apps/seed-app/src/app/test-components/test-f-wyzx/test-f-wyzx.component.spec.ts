import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFWYZxComponent } from './test-f-wyzx.component';

describe('TestFWYZxComponent', () => {
  let component: TestFWYZxComponent;
  let fixture: ComponentFixture<TestFWYZxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFWYZxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFWYZxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
