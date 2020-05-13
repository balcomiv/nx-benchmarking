import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOJjmkComponent } from './test-ojjmk.component';

describe('TestOJjmkComponent', () => {
  let component: TestOJjmkComponent;
  let fixture: ComponentFixture<TestOJjmkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOJjmkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOJjmkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
