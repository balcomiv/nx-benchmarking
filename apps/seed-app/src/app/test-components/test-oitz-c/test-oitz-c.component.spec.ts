import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOItzCComponent } from './test-oitz-c.component';

describe('TestOItzCComponent', () => {
  let component: TestOItzCComponent;
  let fixture: ComponentFixture<TestOItzCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOItzCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOItzCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
