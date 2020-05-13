import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZARkOComponent } from './test-zark-o.component';

describe('TestZARkOComponent', () => {
  let component: TestZARkOComponent;
  let fixture: ComponentFixture<TestZARkOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZARkOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZARkOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
