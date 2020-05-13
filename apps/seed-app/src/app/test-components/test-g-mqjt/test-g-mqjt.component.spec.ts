import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGMQJtComponent } from './test-g-mqjt.component';

describe('TestGMQJtComponent', () => {
  let component: TestGMQJtComponent;
  let fixture: ComponentFixture<TestGMQJtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGMQJtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGMQJtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
