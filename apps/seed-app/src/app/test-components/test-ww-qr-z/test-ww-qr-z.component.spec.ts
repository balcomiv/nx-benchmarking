import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWwQrZComponent } from './test-ww-qr-z.component';

describe('TestWwQrZComponent', () => {
  let component: TestWwQrZComponent;
  let fixture: ComponentFixture<TestWwQrZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWwQrZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWwQrZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
