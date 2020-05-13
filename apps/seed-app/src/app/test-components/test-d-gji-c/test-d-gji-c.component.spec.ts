import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDGjiCComponent } from './test-d-gji-c.component';

describe('TestDGjiCComponent', () => {
  let component: TestDGjiCComponent;
  let fixture: ComponentFixture<TestDGjiCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDGjiCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDGjiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
