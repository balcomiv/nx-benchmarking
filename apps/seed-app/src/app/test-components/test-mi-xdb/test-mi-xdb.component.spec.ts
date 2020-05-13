import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiXdbComponent } from './test-mi-xdb.component';

describe('TestMiXdbComponent', () => {
  let component: TestMiXdbComponent;
  let fixture: ComponentFixture<TestMiXdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiXdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiXdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
