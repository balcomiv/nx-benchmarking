import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRKslzComponent } from './test-rkslz.component';

describe('TestRKslzComponent', () => {
  let component: TestRKslzComponent;
  let fixture: ComponentFixture<TestRKslzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRKslzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRKslzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
