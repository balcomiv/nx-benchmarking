import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUxTOBComponent } from './test-ux-tob.component';

describe('TestUxTOBComponent', () => {
  let component: TestUxTOBComponent;
  let fixture: ComponentFixture<TestUxTOBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUxTOBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUxTOBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
