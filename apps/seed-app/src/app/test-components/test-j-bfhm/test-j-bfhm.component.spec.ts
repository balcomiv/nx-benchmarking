import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJBfhmComponent } from './test-j-bfhm.component';

describe('TestJBfhmComponent', () => {
  let component: TestJBfhmComponent;
  let fixture: ComponentFixture<TestJBfhmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJBfhmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJBfhmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
