import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXLQTEComponent } from './test-x-lqte.component';

describe('TestXLQTEComponent', () => {
  let component: TestXLQTEComponent;
  let fixture: ComponentFixture<TestXLQTEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXLQTEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXLQTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
