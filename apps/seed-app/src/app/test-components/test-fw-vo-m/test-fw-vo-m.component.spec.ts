import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFwVoMComponent } from './test-fw-vo-m.component';

describe('TestFwVoMComponent', () => {
  let component: TestFwVoMComponent;
  let fixture: ComponentFixture<TestFwVoMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFwVoMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFwVoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
