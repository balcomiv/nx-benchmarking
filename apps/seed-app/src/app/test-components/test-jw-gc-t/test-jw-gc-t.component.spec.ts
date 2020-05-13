import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJwGcTComponent } from './test-jw-gc-t.component';

describe('TestJwGcTComponent', () => {
  let component: TestJwGcTComponent;
  let fixture: ComponentFixture<TestJwGcTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJwGcTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJwGcTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
