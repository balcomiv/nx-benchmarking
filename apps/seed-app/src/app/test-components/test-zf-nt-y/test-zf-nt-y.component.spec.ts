import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZfNtYComponent } from './test-zf-nt-y.component';

describe('TestZfNtYComponent', () => {
  let component: TestZfNtYComponent;
  let fixture: ComponentFixture<TestZfNtYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZfNtYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZfNtYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
