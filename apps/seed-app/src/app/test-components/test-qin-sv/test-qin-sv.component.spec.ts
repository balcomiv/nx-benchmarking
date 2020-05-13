import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQinSvComponent } from './test-qin-sv.component';

describe('TestQinSvComponent', () => {
  let component: TestQinSvComponent;
  let fixture: ComponentFixture<TestQinSvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQinSvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQinSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
