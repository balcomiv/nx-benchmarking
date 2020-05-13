import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDQhEzComponent } from './test-dqh-ez.component';

describe('TestDQhEzComponent', () => {
  let component: TestDQhEzComponent;
  let fixture: ComponentFixture<TestDQhEzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDQhEzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDQhEzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
