import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJntYcComponent } from './test-jnt-yc.component';

describe('TestJntYcComponent', () => {
  let component: TestJntYcComponent;
  let fixture: ComponentFixture<TestJntYcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJntYcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJntYcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
