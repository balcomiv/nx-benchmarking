import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLZHRgComponent } from './test-lzhrg.component';

describe('TestLZHRgComponent', () => {
  let component: TestLZHRgComponent;
  let fixture: ComponentFixture<TestLZHRgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLZHRgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLZHRgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
