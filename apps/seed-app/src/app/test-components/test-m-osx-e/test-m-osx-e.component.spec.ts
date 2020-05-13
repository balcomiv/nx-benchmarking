import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMOSxEComponent } from './test-m-osx-e.component';

describe('TestMOSxEComponent', () => {
  let component: TestMOSxEComponent;
  let fixture: ComponentFixture<TestMOSxEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMOSxEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMOSxEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
