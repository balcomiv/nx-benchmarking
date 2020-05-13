import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKJXFDComponent } from './test-kjxfd.component';

describe('TestKJXFDComponent', () => {
  let component: TestKJXFDComponent;
  let fixture: ComponentFixture<TestKJXFDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKJXFDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKJXFDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
