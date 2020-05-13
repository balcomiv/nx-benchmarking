import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTxcjaComponent } from './test-txcja.component';

describe('TestTxcjaComponent', () => {
  let component: TestTxcjaComponent;
  let fixture: ComponentFixture<TestTxcjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTxcjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTxcjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
