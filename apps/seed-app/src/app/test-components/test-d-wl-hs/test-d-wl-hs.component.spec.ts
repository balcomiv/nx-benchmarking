import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDWlHSComponent } from './test-d-wl-hs.component';

describe('TestDWlHSComponent', () => {
  let component: TestDWlHSComponent;
  let fixture: ComponentFixture<TestDWlHSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDWlHSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDWlHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
