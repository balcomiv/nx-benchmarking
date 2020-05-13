import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKfmYDComponent } from './test-kfm-yd.component';

describe('TestKfmYDComponent', () => {
  let component: TestKfmYDComponent;
  let fixture: ComponentFixture<TestKfmYDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKfmYDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKfmYDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
