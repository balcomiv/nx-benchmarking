import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVSGvhComponent } from './test-vsgvh.component';

describe('TestVSGvhComponent', () => {
  let component: TestVSGvhComponent;
  let fixture: ComponentFixture<TestVSGvhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVSGvhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVSGvhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
