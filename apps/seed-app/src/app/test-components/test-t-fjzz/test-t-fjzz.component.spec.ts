import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTFJZzComponent } from './test-t-fjzz.component';

describe('TestTFJZzComponent', () => {
  let component: TestTFJZzComponent;
  let fixture: ComponentFixture<TestTFJZzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTFJZzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTFJZzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
