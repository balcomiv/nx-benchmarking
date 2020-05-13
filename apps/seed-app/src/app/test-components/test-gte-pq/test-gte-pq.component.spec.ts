import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGtePqComponent } from './test-gte-pq.component';

describe('TestGtePqComponent', () => {
  let component: TestGtePqComponent;
  let fixture: ComponentFixture<TestGtePqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGtePqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGtePqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
