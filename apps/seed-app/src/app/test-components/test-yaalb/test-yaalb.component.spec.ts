import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYAalbComponent } from './test-yaalb.component';

describe('TestYAalbComponent', () => {
  let component: TestYAalbComponent;
  let fixture: ComponentFixture<TestYAalbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestYAalbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYAalbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
