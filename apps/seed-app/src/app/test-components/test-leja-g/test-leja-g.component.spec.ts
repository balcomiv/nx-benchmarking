import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLEjaGComponent } from './test-leja-g.component';

describe('TestLEjaGComponent', () => {
  let component: TestLEjaGComponent;
  let fixture: ComponentFixture<TestLEjaGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLEjaGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLEjaGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
