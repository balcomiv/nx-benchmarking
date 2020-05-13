import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNyBThComponent } from './test-ny-bth.component';

describe('TestNyBThComponent', () => {
  let component: TestNyBThComponent;
  let fixture: ComponentFixture<TestNyBThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNyBThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNyBThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
