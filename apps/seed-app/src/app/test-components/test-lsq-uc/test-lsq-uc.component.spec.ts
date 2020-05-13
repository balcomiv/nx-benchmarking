import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLsqUcComponent } from './test-lsq-uc.component';

describe('TestLsqUcComponent', () => {
  let component: TestLsqUcComponent;
  let fixture: ComponentFixture<TestLsqUcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLsqUcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLsqUcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
