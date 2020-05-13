import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBtEOpComponent } from './test-bt-eop.component';

describe('TestBtEOpComponent', () => {
  let component: TestBtEOpComponent;
  let fixture: ComponentFixture<TestBtEOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBtEOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBtEOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
