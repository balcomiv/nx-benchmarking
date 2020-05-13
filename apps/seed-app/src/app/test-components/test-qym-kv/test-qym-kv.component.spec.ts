import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQYmKVComponent } from './test-qym-kv.component';

describe('TestQYmKVComponent', () => {
  let component: TestQYmKVComponent;
  let fixture: ComponentFixture<TestQYmKVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestQYmKVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQYmKVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
