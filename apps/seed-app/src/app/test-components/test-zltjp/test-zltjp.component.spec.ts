import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZLTJpComponent } from './test-zltjp.component';

describe('TestZLTJpComponent', () => {
  let component: TestZLTJpComponent;
  let fixture: ComponentFixture<TestZLTJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZLTJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZLTJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
