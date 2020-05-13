import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBVakLComponent } from './test-b-vak-l.component';

describe('TestBVakLComponent', () => {
  let component: TestBVakLComponent;
  let fixture: ComponentFixture<TestBVakLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBVakLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBVakLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
