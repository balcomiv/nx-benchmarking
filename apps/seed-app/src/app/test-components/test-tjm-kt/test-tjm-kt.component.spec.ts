import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTjmKtComponent } from './test-tjm-kt.component';

describe('TestTjmKtComponent', () => {
  let component: TestTjmKtComponent;
  let fixture: ComponentFixture<TestTjmKtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTjmKtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTjmKtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
