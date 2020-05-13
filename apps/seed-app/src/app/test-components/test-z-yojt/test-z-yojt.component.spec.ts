import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZYOJtComponent } from './test-z-yojt.component';

describe('TestZYOJtComponent', () => {
  let component: TestZYOJtComponent;
  let fixture: ComponentFixture<TestZYOJtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZYOJtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZYOJtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
