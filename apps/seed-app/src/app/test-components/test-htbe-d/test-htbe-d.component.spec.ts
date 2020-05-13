import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHTBeDComponent } from './test-htbe-d.component';

describe('TestHTBeDComponent', () => {
  let component: TestHTBeDComponent;
  let fixture: ComponentFixture<TestHTBeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHTBeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHTBeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
