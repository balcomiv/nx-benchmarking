import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKUsSYComponent } from './test-k-us-sy.component';

describe('TestKUsSYComponent', () => {
  let component: TestKUsSYComponent;
  let fixture: ComponentFixture<TestKUsSYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKUsSYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKUsSYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
