import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVDhoRComponent } from './test-vdho-r.component';

describe('TestVDhoRComponent', () => {
  let component: TestVDhoRComponent;
  let fixture: ComponentFixture<TestVDhoRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVDhoRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVDhoRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
