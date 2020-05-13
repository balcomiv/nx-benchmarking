import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOBarcComponent } from './test-o-barc.component';

describe('TestOBarcComponent', () => {
  let component: TestOBarcComponent;
  let fixture: ComponentFixture<TestOBarcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOBarcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOBarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
