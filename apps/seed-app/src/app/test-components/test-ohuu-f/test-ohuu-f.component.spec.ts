import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOHUuFComponent } from './test-ohuu-f.component';

describe('TestOHUuFComponent', () => {
  let component: TestOHUuFComponent;
  let fixture: ComponentFixture<TestOHUuFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOHUuFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOHUuFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
