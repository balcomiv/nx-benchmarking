import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLIkdzComponent } from './test-likdz.component';

describe('TestLIkdzComponent', () => {
  let component: TestLIkdzComponent;
  let fixture: ComponentFixture<TestLIkdzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLIkdzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLIkdzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
