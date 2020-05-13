import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHZSzVComponent } from './test-h-zsz-v.component';

describe('TestHZSzVComponent', () => {
  let component: TestHZSzVComponent;
  let fixture: ComponentFixture<TestHZSzVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHZSzVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHZSzVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
