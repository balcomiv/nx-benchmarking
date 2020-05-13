import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRLUDxComponent } from './test-r-ludx.component';

describe('TestRLUDxComponent', () => {
  let component: TestRLUDxComponent;
  let fixture: ComponentFixture<TestRLUDxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRLUDxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRLUDxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
