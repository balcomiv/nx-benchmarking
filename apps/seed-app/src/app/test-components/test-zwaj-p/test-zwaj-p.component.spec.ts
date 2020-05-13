import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZWAjPComponent } from './test-zwaj-p.component';

describe('TestZWAjPComponent', () => {
  let component: TestZWAjPComponent;
  let fixture: ComponentFixture<TestZWAjPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZWAjPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZWAjPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
