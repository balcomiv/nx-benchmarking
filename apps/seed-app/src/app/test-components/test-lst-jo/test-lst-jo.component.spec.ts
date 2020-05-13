import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLStJOComponent } from './test-lst-jo.component';

describe('TestLStJOComponent', () => {
  let component: TestLStJOComponent;
  let fixture: ComponentFixture<TestLStJOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLStJOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLStJOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
