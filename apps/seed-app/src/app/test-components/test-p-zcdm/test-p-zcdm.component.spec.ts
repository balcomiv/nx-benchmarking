import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPZCDmComponent } from './test-p-zcdm.component';

describe('TestPZCDmComponent', () => {
  let component: TestPZCDmComponent;
  let fixture: ComponentFixture<TestPZCDmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPZCDmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPZCDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
