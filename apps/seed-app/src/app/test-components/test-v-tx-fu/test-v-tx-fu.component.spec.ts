import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVTxFuComponent } from './test-v-tx-fu.component';

describe('TestVTxFuComponent', () => {
  let component: TestVTxFuComponent;
  let fixture: ComponentFixture<TestVTxFuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVTxFuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVTxFuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
