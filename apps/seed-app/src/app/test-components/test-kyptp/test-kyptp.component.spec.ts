import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKYPTpComponent } from './test-kyptp.component';

describe('TestKYPTpComponent', () => {
  let component: TestKYPTpComponent;
  let fixture: ComponentFixture<TestKYPTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKYPTpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKYPTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
