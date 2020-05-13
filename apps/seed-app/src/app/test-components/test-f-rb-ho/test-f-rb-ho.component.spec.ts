import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFRbHOComponent } from './test-f-rb-ho.component';

describe('TestFRbHOComponent', () => {
  let component: TestFRbHOComponent;
  let fixture: ComponentFixture<TestFRbHOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFRbHOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFRbHOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
