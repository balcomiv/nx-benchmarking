import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBHTqwComponent } from './test-bhtqw.component';

describe('TestBHTqwComponent', () => {
  let component: TestBHTqwComponent;
  let fixture: ComponentFixture<TestBHTqwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBHTqwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBHTqwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
