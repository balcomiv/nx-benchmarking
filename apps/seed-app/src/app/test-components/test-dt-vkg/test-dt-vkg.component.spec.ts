import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDtVKGComponent } from './test-dt-vkg.component';

describe('TestDtVKGComponent', () => {
  let component: TestDtVKGComponent;
  let fixture: ComponentFixture<TestDtVKGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDtVKGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDtVKGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
