import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEgozIComponent } from './test-egoz-i.component';

describe('TestEgozIComponent', () => {
  let component: TestEgozIComponent;
  let fixture: ComponentFixture<TestEgozIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEgozIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEgozIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
