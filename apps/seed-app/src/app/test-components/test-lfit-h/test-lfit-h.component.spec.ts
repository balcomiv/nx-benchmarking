import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLFItHComponent } from './test-lfit-h.component';

describe('TestLFItHComponent', () => {
  let component: TestLFItHComponent;
  let fixture: ComponentFixture<TestLFItHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLFItHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLFItHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
