import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJTGptComponent } from './test-j-tgpt.component';

describe('TestJTGptComponent', () => {
  let component: TestJTGptComponent;
  let fixture: ComponentFixture<TestJTGptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJTGptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJTGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
