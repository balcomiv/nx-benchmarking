import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSroOjComponent } from './test-sro-oj.component';

describe('TestSroOjComponent', () => {
  let component: TestSroOjComponent;
  let fixture: ComponentFixture<TestSroOjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSroOjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSroOjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
