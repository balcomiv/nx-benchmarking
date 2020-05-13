import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJRgYqComponent } from './test-j-rg-yq.component';

describe('TestJRgYqComponent', () => {
  let component: TestJRgYqComponent;
  let fixture: ComponentFixture<TestJRgYqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJRgYqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJRgYqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
