import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEOhFVComponent } from './test-e-oh-fv.component';

describe('TestEOhFVComponent', () => {
  let component: TestEOhFVComponent;
  let fixture: ComponentFixture<TestEOhFVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEOhFVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEOhFVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
