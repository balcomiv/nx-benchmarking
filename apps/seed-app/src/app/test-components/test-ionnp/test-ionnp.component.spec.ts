import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIONnpComponent } from './test-ionnp.component';

describe('TestIONnpComponent', () => {
  let component: TestIONnpComponent;
  let fixture: ComponentFixture<TestIONnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIONnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIONnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
