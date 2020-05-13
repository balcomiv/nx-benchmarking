import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWigqmComponent } from './test-wigqm.component';

describe('TestWigqmComponent', () => {
  let component: TestWigqmComponent;
  let fixture: ComponentFixture<TestWigqmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWigqmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWigqmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
