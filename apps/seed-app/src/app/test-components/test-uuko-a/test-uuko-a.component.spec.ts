import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUukoAComponent } from './test-uuko-a.component';

describe('TestUukoAComponent', () => {
  let component: TestUukoAComponent;
  let fixture: ComponentFixture<TestUukoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUukoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUukoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
