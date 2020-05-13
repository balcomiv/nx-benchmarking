import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXglkOComponent } from './test-xglk-o.component';

describe('TestXglkOComponent', () => {
  let component: TestXglkOComponent;
  let fixture: ComponentFixture<TestXglkOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXglkOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXglkOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
