import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOpyiCComponent } from './test-opyi-c.component';

describe('TestOpyiCComponent', () => {
  let component: TestOpyiCComponent;
  let fixture: ComponentFixture<TestOpyiCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOpyiCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOpyiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
