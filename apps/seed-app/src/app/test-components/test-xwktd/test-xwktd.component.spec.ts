import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXWKTdComponent } from './test-xwktd.component';

describe('TestXWKTdComponent', () => {
  let component: TestXWKTdComponent;
  let fixture: ComponentFixture<TestXWKTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXWKTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXWKTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
