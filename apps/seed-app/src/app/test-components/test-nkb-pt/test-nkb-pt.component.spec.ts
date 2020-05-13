import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNkbPtComponent } from './test-nkb-pt.component';

describe('TestNkbPtComponent', () => {
  let component: TestNkbPtComponent;
  let fixture: ComponentFixture<TestNkbPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNkbPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNkbPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
