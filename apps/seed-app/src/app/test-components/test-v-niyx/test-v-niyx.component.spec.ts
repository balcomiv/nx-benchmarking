import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVNIYXComponent } from './test-v-niyx.component';

describe('TestVNIYXComponent', () => {
  let component: TestVNIYXComponent;
  let fixture: ComponentFixture<TestVNIYXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVNIYXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVNIYXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
