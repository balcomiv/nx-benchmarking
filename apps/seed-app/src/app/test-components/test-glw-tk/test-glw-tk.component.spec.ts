import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGlwTkComponent } from './test-glw-tk.component';

describe('TestGlwTkComponent', () => {
  let component: TestGlwTkComponent;
  let fixture: ComponentFixture<TestGlwTkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGlwTkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGlwTkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
