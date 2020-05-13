import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFfHyQComponent } from './test-ff-hy-q.component';

describe('TestFfHyQComponent', () => {
  let component: TestFfHyQComponent;
  let fixture: ComponentFixture<TestFfHyQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFfHyQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFfHyQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
