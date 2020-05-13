import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBJZYqComponent } from './test-b-jzyq.component';

describe('TestBJZYqComponent', () => {
  let component: TestBJZYqComponent;
  let fixture: ComponentFixture<TestBJZYqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBJZYqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBJZYqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
