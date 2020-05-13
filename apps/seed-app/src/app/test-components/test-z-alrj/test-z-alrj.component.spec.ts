import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZAlrjComponent } from './test-z-alrj.component';

describe('TestZAlrjComponent', () => {
  let component: TestZAlrjComponent;
  let fixture: ComponentFixture<TestZAlrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZAlrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZAlrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
