import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAZkjcComponent } from './test-a-zkjc.component';

describe('TestAZkjcComponent', () => {
  let component: TestAZkjcComponent;
  let fixture: ComponentFixture<TestAZkjcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAZkjcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAZkjcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
