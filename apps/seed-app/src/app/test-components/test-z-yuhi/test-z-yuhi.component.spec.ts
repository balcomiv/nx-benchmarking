import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZYuhiComponent } from './test-z-yuhi.component';

describe('TestZYuhiComponent', () => {
  let component: TestZYuhiComponent;
  let fixture: ComponentFixture<TestZYuhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZYuhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZYuhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
