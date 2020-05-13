import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMlbkDComponent } from './test-mlbk-d.component';

describe('TestMlbkDComponent', () => {
  let component: TestMlbkDComponent;
  let fixture: ComponentFixture<TestMlbkDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMlbkDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMlbkDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
