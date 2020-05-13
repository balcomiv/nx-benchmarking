import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWGIZwComponent } from './test-wgizw.component';

describe('TestWGIZwComponent', () => {
  let component: TestWGIZwComponent;
  let fixture: ComponentFixture<TestWGIZwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWGIZwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWGIZwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
