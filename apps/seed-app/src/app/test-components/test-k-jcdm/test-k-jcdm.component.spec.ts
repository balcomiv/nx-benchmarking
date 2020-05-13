import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKJCDMComponent } from './test-k-jcdm.component';

describe('TestKJCDMComponent', () => {
  let component: TestKJCDMComponent;
  let fixture: ComponentFixture<TestKJCDMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKJCDMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKJCDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
