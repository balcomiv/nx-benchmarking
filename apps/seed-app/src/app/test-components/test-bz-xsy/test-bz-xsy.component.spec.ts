import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBzXsyComponent } from './test-bz-xsy.component';

describe('TestBzXsyComponent', () => {
  let component: TestBzXsyComponent;
  let fixture: ComponentFixture<TestBzXsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBzXsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBzXsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
