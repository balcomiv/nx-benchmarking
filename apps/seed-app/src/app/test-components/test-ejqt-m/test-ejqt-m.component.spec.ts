import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEJqtMComponent } from './test-ejqt-m.component';

describe('TestEJqtMComponent', () => {
  let component: TestEJqtMComponent;
  let fixture: ComponentFixture<TestEJqtMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEJqtMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEJqtMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
