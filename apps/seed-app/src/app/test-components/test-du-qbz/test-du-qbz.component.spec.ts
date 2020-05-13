import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDuQbzComponent } from './test-du-qbz.component';

describe('TestDuQbzComponent', () => {
  let component: TestDuQbzComponent;
  let fixture: ComponentFixture<TestDuQbzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDuQbzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDuQbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
