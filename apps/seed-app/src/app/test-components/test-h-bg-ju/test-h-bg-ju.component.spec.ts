import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHBgJUComponent } from './test-h-bg-ju.component';

describe('TestHBgJUComponent', () => {
  let component: TestHBgJUComponent;
  let fixture: ComponentFixture<TestHBgJUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHBgJUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHBgJUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
