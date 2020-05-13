import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAgRJCComponent } from './test-ag-rjc.component';

describe('TestAgRJCComponent', () => {
  let component: TestAgRJCComponent;
  let fixture: ComponentFixture<TestAgRJCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAgRJCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAgRJCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
