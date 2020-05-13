import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFkilxComponent } from './test-fkilx.component';

describe('TestFkilxComponent', () => {
  let component: TestFkilxComponent;
  let fixture: ComponentFixture<TestFkilxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFkilxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFkilxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
