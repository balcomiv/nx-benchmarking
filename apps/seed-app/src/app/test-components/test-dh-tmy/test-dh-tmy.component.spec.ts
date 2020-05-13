import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDhTmyComponent } from './test-dh-tmy.component';

describe('TestDhTmyComponent', () => {
  let component: TestDhTmyComponent;
  let fixture: ComponentFixture<TestDhTmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDhTmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDhTmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
