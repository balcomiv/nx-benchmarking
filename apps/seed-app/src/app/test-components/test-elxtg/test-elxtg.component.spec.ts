import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestELXTGComponent } from './test-elxtg.component';

describe('TestELXTGComponent', () => {
  let component: TestELXTGComponent;
  let fixture: ComponentFixture<TestELXTGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestELXTGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestELXTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
