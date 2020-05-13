import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWpXZyComponent } from './test-wp-xzy.component';

describe('TestWpXZyComponent', () => {
  let component: TestWpXZyComponent;
  let fixture: ComponentFixture<TestWpXZyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWpXZyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWpXZyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
