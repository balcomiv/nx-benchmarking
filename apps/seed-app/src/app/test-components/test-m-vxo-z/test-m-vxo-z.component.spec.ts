import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMVxoZComponent } from './test-m-vxo-z.component';

describe('TestMVxoZComponent', () => {
  let component: TestMVxoZComponent;
  let fixture: ComponentFixture<TestMVxoZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMVxoZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMVxoZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
