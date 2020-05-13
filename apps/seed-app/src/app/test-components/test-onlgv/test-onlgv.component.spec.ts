import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnlgvComponent } from './test-onlgv.component';

describe('TestOnlgvComponent', () => {
  let component: TestOnlgvComponent;
  let fixture: ComponentFixture<TestOnlgvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOnlgvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnlgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
