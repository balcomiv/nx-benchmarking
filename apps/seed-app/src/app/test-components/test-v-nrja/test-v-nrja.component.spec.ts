import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVNrjaComponent } from './test-v-nrja.component';

describe('TestVNrjaComponent', () => {
  let component: TestVNrjaComponent;
  let fixture: ComponentFixture<TestVNrjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVNrjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVNrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
