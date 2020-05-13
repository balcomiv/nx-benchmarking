import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIgzohComponent } from './test-igzoh.component';

describe('TestIgzohComponent', () => {
  let component: TestIgzohComponent;
  let fixture: ComponentFixture<TestIgzohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIgzohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIgzohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
