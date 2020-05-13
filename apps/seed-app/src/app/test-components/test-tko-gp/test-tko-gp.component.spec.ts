import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTKoGPComponent } from './test-tko-gp.component';

describe('TestTKoGPComponent', () => {
  let component: TestTKoGPComponent;
  let fixture: ComponentFixture<TestTKoGPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTKoGPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTKoGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
