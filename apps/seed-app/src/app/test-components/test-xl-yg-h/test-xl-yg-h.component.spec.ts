import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXlYgHComponent } from './test-xl-yg-h.component';

describe('TestXlYgHComponent', () => {
  let component: TestXlYgHComponent;
  let fixture: ComponentFixture<TestXlYgHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXlYgHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXlYgHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
