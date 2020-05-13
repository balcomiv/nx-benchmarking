import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCDzxeComponent } from './test-cdzxe.component';

describe('TestCDzxeComponent', () => {
  let component: TestCDzxeComponent;
  let fixture: ComponentFixture<TestCDzxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCDzxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCDzxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
