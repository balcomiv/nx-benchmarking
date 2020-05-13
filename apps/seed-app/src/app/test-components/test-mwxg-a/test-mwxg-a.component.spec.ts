import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMwxgAComponent } from './test-mwxg-a.component';

describe('TestMwxgAComponent', () => {
  let component: TestMwxgAComponent;
  let fixture: ComponentFixture<TestMwxgAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMwxgAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMwxgAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
