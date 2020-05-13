import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBQusoComponent } from './test-b-quso.component';

describe('TestBQusoComponent', () => {
  let component: TestBQusoComponent;
  let fixture: ComponentFixture<TestBQusoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBQusoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBQusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
