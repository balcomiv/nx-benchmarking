import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAfpWBComponent } from './test-afp-wb.component';

describe('TestAfpWBComponent', () => {
  let component: TestAfpWBComponent;
  let fixture: ComponentFixture<TestAfpWBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAfpWBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAfpWBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
