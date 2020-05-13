import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCHgqhComponent } from './test-c-hgqh.component';

describe('TestCHgqhComponent', () => {
  let component: TestCHgqhComponent;
  let fixture: ComponentFixture<TestCHgqhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCHgqhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCHgqhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
