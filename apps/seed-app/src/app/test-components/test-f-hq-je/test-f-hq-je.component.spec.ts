import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFHqJEComponent } from './test-f-hq-je.component';

describe('TestFHqJEComponent', () => {
  let component: TestFHqJEComponent;
  let fixture: ComponentFixture<TestFHqJEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFHqJEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFHqJEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
