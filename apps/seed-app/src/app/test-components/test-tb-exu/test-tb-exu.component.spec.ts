import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTbEXUComponent } from './test-tb-exu.component';

describe('TestTbEXUComponent', () => {
  let component: TestTbEXUComponent;
  let fixture: ComponentFixture<TestTbEXUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTbEXUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTbEXUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
