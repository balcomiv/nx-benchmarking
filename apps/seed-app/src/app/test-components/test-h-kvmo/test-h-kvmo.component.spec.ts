import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHKVMoComponent } from './test-h-kvmo.component';

describe('TestHKVMoComponent', () => {
  let component: TestHKVMoComponent;
  let fixture: ComponentFixture<TestHKVMoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHKVMoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHKVMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
