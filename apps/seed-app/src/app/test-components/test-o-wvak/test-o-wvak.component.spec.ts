import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOWVAkComponent } from './test-o-wvak.component';

describe('TestOWVAkComponent', () => {
  let component: TestOWVAkComponent;
  let fixture: ComponentFixture<TestOWVAkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOWVAkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOWVAkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
