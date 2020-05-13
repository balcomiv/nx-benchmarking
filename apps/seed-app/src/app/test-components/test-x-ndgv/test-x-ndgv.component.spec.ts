import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXNDGvComponent } from './test-x-ndgv.component';

describe('TestXNDGvComponent', () => {
  let component: TestXNDGvComponent;
  let fixture: ComponentFixture<TestXNDGvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXNDGvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXNDGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
