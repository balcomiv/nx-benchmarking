import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBePqrComponent } from './test-be-pqr.component';

describe('TestBePqrComponent', () => {
  let component: TestBePqrComponent;
  let fixture: ComponentFixture<TestBePqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBePqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBePqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
