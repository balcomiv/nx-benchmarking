import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPbGCkComponent } from './test-pb-gck.component';

describe('TestPbGCkComponent', () => {
  let component: TestPbGCkComponent;
  let fixture: ComponentFixture<TestPbGCkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPbGCkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPbGCkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
