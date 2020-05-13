import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRmZlyComponent } from './test-rm-zly.component';

describe('TestRmZlyComponent', () => {
  let component: TestRmZlyComponent;
  let fixture: ComponentFixture<TestRmZlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRmZlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRmZlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
