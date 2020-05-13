import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHsRxEComponent } from './test-hs-rx-e.component';

describe('TestHsRxEComponent', () => {
  let component: TestHsRxEComponent;
  let fixture: ComponentFixture<TestHsRxEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHsRxEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHsRxEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
