import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPFbmwComponent } from './test-pfbmw.component';

describe('TestPFbmwComponent', () => {
  let component: TestPFbmwComponent;
  let fixture: ComponentFixture<TestPFbmwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPFbmwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPFbmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
