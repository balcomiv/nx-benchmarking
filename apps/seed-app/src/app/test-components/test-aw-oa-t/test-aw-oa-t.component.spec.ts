import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAwOaTComponent } from './test-aw-oa-t.component';

describe('TestAwOaTComponent', () => {
  let component: TestAwOaTComponent;
  let fixture: ComponentFixture<TestAwOaTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAwOaTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAwOaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
