import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZrLPKComponent } from './test-zr-lpk.component';

describe('TestZrLPKComponent', () => {
  let component: TestZrLPKComponent;
  let fixture: ComponentFixture<TestZrLPKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZrLPKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZrLPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
