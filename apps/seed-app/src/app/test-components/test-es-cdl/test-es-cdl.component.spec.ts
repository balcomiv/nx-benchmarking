import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEsCdlComponent } from './test-es-cdl.component';

describe('TestEsCdlComponent', () => {
  let component: TestEsCdlComponent;
  let fixture: ComponentFixture<TestEsCdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEsCdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEsCdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
