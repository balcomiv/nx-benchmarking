import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLyETfComponent } from './test-ly-etf.component';

describe('TestLyETfComponent', () => {
  let component: TestLyETfComponent;
  let fixture: ComponentFixture<TestLyETfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLyETfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLyETfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
