import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHYxZBComponent } from './test-h-yx-zb.component';

describe('TestHYxZBComponent', () => {
  let component: TestHYxZBComponent;
  let fixture: ComponentFixture<TestHYxZBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHYxZBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHYxZBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
