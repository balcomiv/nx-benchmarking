import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEDWZHComponent } from './test-e-dwzh.component';

describe('TestEDWZHComponent', () => {
  let component: TestEDWZHComponent;
  let fixture: ComponentFixture<TestEDWZHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEDWZHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEDWZHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
