import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVMakEComponent } from './test-vmak-e.component';

describe('TestVMakEComponent', () => {
  let component: TestVMakEComponent;
  let fixture: ComponentFixture<TestVMakEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVMakEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVMakEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
