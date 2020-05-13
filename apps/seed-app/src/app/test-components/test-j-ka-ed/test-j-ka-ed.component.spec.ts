import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJKaEDComponent } from './test-j-ka-ed.component';

describe('TestJKaEDComponent', () => {
  let component: TestJKaEDComponent;
  let fixture: ComponentFixture<TestJKaEDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJKaEDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJKaEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
