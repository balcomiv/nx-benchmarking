import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEewCHComponent } from './test-eew-ch.component';

describe('TestEewCHComponent', () => {
  let component: TestEewCHComponent;
  let fixture: ComponentFixture<TestEewCHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEewCHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEewCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
