import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRjMZSComponent } from './test-rj-mzs.component';

describe('TestRjMZSComponent', () => {
  let component: TestRjMZSComponent;
  let fixture: ComponentFixture<TestRjMZSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRjMZSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRjMZSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
