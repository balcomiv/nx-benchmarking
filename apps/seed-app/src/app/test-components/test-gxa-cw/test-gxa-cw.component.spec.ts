import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGxaCWComponent } from './test-gxa-cw.component';

describe('TestGxaCWComponent', () => {
  let component: TestGxaCWComponent;
  let fixture: ComponentFixture<TestGxaCWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGxaCWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGxaCWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
