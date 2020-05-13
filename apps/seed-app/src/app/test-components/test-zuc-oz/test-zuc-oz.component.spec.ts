import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZucOZComponent } from './test-zuc-oz.component';

describe('TestZucOZComponent', () => {
  let component: TestZucOZComponent;
  let fixture: ComponentFixture<TestZucOZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZucOZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZucOZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
