import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEbGhKComponent } from './test-eb-gh-k.component';

describe('TestEbGhKComponent', () => {
  let component: TestEbGhKComponent;
  let fixture: ComponentFixture<TestEbGhKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEbGhKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEbGhKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
