import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXRBuAComponent } from './test-xrbu-a.component';

describe('TestXRBuAComponent', () => {
  let component: TestXRBuAComponent;
  let fixture: ComponentFixture<TestXRBuAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXRBuAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXRBuAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
