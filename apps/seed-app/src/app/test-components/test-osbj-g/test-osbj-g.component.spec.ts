import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOsbjGComponent } from './test-osbj-g.component';

describe('TestOsbjGComponent', () => {
  let component: TestOsbjGComponent;
  let fixture: ComponentFixture<TestOsbjGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOsbjGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOsbjGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
