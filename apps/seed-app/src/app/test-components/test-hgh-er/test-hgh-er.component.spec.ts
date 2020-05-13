import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHghERComponent } from './test-hgh-er.component';

describe('TestHghERComponent', () => {
  let component: TestHghERComponent;
  let fixture: ComponentFixture<TestHghERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHghERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHghERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
