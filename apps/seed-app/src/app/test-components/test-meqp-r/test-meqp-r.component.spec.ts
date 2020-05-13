import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMEQpRComponent } from './test-meqp-r.component';

describe('TestMEQpRComponent', () => {
  let component: TestMEQpRComponent;
  let fixture: ComponentFixture<TestMEQpRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMEQpRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMEQpRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
