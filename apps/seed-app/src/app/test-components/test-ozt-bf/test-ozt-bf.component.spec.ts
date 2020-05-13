import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOztBfComponent } from './test-ozt-bf.component';

describe('TestOztBfComponent', () => {
  let component: TestOztBfComponent;
  let fixture: ComponentFixture<TestOztBfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOztBfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOztBfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
