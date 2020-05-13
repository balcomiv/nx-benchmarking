import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTVSMoComponent } from './test-t-vsmo.component';

describe('TestTVSMoComponent', () => {
  let component: TestTVSMoComponent;
  let fixture: ComponentFixture<TestTVSMoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTVSMoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTVSMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
