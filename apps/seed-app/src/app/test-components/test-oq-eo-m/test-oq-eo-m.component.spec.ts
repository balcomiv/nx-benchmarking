import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOqEoMComponent } from './test-oq-eo-m.component';

describe('TestOqEoMComponent', () => {
  let component: TestOqEoMComponent;
  let fixture: ComponentFixture<TestOqEoMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOqEoMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOqEoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
