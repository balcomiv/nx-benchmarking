import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSajZnComponent } from './test-saj-zn.component';

describe('TestSajZnComponent', () => {
  let component: TestSajZnComponent;
  let fixture: ComponentFixture<TestSajZnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSajZnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSajZnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
