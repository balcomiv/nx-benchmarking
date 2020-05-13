import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTMOuEComponent } from './test-t-mou-e.component';

describe('TestTMOuEComponent', () => {
  let component: TestTMOuEComponent;
  let fixture: ComponentFixture<TestTMOuEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTMOuEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTMOuEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
