import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJrvGOComponent } from './test-jrv-go.component';

describe('TestJrvGOComponent', () => {
  let component: TestJrvGOComponent;
  let fixture: ComponentFixture<TestJrvGOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJrvGOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJrvGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
