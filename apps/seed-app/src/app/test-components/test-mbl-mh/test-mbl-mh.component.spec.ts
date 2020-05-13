import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMblMhComponent } from './test-mbl-mh.component';

describe('TestMblMhComponent', () => {
  let component: TestMblMhComponent;
  let fixture: ComponentFixture<TestMblMhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMblMhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMblMhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
