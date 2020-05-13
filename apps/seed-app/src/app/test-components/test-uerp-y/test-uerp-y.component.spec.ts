import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUErpYComponent } from './test-uerp-y.component';

describe('TestUErpYComponent', () => {
  let component: TestUErpYComponent;
  let fixture: ComponentFixture<TestUErpYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUErpYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUErpYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
