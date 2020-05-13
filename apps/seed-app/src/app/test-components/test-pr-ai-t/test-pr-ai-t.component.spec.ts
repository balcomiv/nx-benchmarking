import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrAiTComponent } from './test-pr-ai-t.component';

describe('TestPrAiTComponent', () => {
  let component: TestPrAiTComponent;
  let fixture: ComponentFixture<TestPrAiTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPrAiTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPrAiTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
