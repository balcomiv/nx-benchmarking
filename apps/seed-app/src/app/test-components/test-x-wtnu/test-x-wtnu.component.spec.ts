import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXWtnuComponent } from './test-x-wtnu.component';

describe('TestXWtnuComponent', () => {
  let component: TestXWtnuComponent;
  let fixture: ComponentFixture<TestXWtnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXWtnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXWtnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
