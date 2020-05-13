import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVlbYfComponent } from './test-vlb-yf.component';

describe('TestVlbYfComponent', () => {
  let component: TestVlbYfComponent;
  let fixture: ComponentFixture<TestVlbYfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVlbYfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVlbYfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
