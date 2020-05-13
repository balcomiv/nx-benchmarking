import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKIAcxComponent } from './test-k-iacx.component';

describe('TestKIAcxComponent', () => {
  let component: TestKIAcxComponent;
  let fixture: ComponentFixture<TestKIAcxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKIAcxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKIAcxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
