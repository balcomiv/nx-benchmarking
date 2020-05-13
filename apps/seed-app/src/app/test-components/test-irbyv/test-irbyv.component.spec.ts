import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIRbyvComponent } from './test-irbyv.component';

describe('TestIRbyvComponent', () => {
  let component: TestIRbyvComponent;
  let fixture: ComponentFixture<TestIRbyvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIRbyvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIRbyvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
