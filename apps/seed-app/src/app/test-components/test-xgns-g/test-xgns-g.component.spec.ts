import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXgnsGComponent } from './test-xgns-g.component';

describe('TestXgnsGComponent', () => {
  let component: TestXgnsGComponent;
  let fixture: ComponentFixture<TestXgnsGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXgnsGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXgnsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
