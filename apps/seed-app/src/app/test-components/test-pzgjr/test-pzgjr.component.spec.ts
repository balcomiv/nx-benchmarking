import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPZgjrComponent } from './test-pzgjr.component';

describe('TestPZgjrComponent', () => {
  let component: TestPZgjrComponent;
  let fixture: ComponentFixture<TestPZgjrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPZgjrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPZgjrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
