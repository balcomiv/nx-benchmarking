import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHHdOoComponent } from './test-h-hd-oo.component';

describe('TestHHdOoComponent', () => {
  let component: TestHHdOoComponent;
  let fixture: ComponentFixture<TestHHdOoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHHdOoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHHdOoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
