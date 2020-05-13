import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRlHQbComponent } from './test-rl-hqb.component';

describe('TestRlHQbComponent', () => {
  let component: TestRlHQbComponent;
  let fixture: ComponentFixture<TestRlHQbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRlHQbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRlHQbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
