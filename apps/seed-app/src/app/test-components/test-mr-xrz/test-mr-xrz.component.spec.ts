import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMrXRzComponent } from './test-mr-xrz.component';

describe('TestMrXRzComponent', () => {
  let component: TestMrXRzComponent;
  let fixture: ComponentFixture<TestMrXRzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMrXRzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMrXRzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
