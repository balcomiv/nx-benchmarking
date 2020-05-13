import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVcpJZComponent } from './test-vcp-jz.component';

describe('TestVcpJZComponent', () => {
  let component: TestVcpJZComponent;
  let fixture: ComponentFixture<TestVcpJZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVcpJZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVcpJZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
