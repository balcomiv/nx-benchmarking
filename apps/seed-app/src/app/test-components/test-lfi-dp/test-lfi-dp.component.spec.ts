import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLfiDpComponent } from './test-lfi-dp.component';

describe('TestLfiDpComponent', () => {
  let component: TestLfiDpComponent;
  let fixture: ComponentFixture<TestLfiDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLfiDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLfiDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
