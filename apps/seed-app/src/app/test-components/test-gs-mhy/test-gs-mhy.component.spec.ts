import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGsMhyComponent } from './test-gs-mhy.component';

describe('TestGsMhyComponent', () => {
  let component: TestGsMhyComponent;
  let fixture: ComponentFixture<TestGsMhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGsMhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGsMhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
