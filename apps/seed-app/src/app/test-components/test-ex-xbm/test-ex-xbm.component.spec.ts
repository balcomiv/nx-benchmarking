import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExXbmComponent } from './test-ex-xbm.component';

describe('TestExXbmComponent', () => {
  let component: TestExXbmComponent;
  let fixture: ComponentFixture<TestExXbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestExXbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExXbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
