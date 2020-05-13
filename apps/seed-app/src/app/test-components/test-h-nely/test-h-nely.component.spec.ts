import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHNELYComponent } from './test-h-nely.component';

describe('TestHNELYComponent', () => {
  let component: TestHNELYComponent;
  let fixture: ComponentFixture<TestHNELYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHNELYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHNELYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
