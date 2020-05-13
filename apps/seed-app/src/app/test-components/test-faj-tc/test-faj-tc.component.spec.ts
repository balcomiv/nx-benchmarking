import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFajTcComponent } from './test-faj-tc.component';

describe('TestFajTcComponent', () => {
  let component: TestFajTcComponent;
  let fixture: ComponentFixture<TestFajTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFajTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFajTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
