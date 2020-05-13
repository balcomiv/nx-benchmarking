import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGNwWQComponent } from './test-g-nw-wq.component';

describe('TestGNwWQComponent', () => {
  let component: TestGNwWQComponent;
  let fixture: ComponentFixture<TestGNwWQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGNwWQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGNwWQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
