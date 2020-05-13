import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDAjVCComponent } from './test-daj-vc.component';

describe('TestDAjVCComponent', () => {
  let component: TestDAjVCComponent;
  let fixture: ComponentFixture<TestDAjVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDAjVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDAjVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
