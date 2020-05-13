import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestECHGyComponent } from './test-e-chgy.component';

describe('TestECHGyComponent', () => {
  let component: TestECHGyComponent;
  let fixture: ComponentFixture<TestECHGyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestECHGyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestECHGyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
