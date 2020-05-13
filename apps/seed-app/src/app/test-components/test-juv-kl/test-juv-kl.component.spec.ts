import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJuvKlComponent } from './test-juv-kl.component';

describe('TestJuvKlComponent', () => {
  let component: TestJuvKlComponent;
  let fixture: ComponentFixture<TestJuvKlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJuvKlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJuvKlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
