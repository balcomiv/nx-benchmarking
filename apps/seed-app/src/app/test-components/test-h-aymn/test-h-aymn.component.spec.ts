import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHAYmnComponent } from './test-h-aymn.component';

describe('TestHAYmnComponent', () => {
  let component: TestHAYmnComponent;
  let fixture: ComponentFixture<TestHAYmnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHAYmnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHAYmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
