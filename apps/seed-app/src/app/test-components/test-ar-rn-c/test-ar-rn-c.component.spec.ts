import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestArRnCComponent } from './test-ar-rn-c.component';

describe('TestArRnCComponent', () => {
  let component: TestArRnCComponent;
  let fixture: ComponentFixture<TestArRnCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestArRnCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestArRnCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
