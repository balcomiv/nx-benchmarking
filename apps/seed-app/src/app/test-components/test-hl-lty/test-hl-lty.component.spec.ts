import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHlLTYComponent } from './test-hl-lty.component';

describe('TestHlLTYComponent', () => {
  let component: TestHlLTYComponent;
  let fixture: ComponentFixture<TestHlLTYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHlLTYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHlLTYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
