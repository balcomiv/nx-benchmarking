import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZYFjTComponent } from './test-zyfj-t.component';

describe('TestZYFjTComponent', () => {
  let component: TestZYFjTComponent;
  let fixture: ComponentFixture<TestZYFjTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZYFjTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZYFjTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
