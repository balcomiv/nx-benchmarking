import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJOPsjComponent } from './test-jopsj.component';

describe('TestJOPsjComponent', () => {
  let component: TestJOPsjComponent;
  let fixture: ComponentFixture<TestJOPsjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJOPsjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJOPsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
