import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVURNrComponent } from './test-vurnr.component';

describe('TestVURNrComponent', () => {
  let component: TestVURNrComponent;
  let fixture: ComponentFixture<TestVURNrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVURNrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVURNrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
