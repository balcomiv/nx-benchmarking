import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBgXeNComponent } from './test-bg-xe-n.component';

describe('TestBgXeNComponent', () => {
  let component: TestBgXeNComponent;
  let fixture: ComponentFixture<TestBgXeNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBgXeNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBgXeNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
