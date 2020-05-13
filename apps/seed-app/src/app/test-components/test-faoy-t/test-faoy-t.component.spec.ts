import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFaoyTComponent } from './test-faoy-t.component';

describe('TestFaoyTComponent', () => {
  let component: TestFaoyTComponent;
  let fixture: ComponentFixture<TestFaoyTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFaoyTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFaoyTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
