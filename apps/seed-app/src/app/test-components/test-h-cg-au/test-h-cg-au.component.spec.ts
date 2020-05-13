import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHCgAuComponent } from './test-h-cg-au.component';

describe('TestHCgAuComponent', () => {
  let component: TestHCgAuComponent;
  let fixture: ComponentFixture<TestHCgAuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHCgAuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHCgAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
