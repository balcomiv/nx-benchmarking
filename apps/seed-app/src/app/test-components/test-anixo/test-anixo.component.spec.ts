import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnixoComponent } from './test-anixo.component';

describe('TestAnixoComponent', () => {
  let component: TestAnixoComponent;
  let fixture: ComponentFixture<TestAnixoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnixoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
