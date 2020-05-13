import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJXYSjComponent } from './test-jxysj.component';

describe('TestJXYSjComponent', () => {
  let component: TestJXYSjComponent;
  let fixture: ComponentFixture<TestJXYSjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJXYSjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJXYSjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
