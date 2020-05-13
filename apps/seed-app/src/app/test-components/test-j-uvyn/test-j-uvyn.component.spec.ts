import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJUVynComponent } from './test-j-uvyn.component';

describe('TestJUVynComponent', () => {
  let component: TestJUVynComponent;
  let fixture: ComponentFixture<TestJUVynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJUVynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJUVynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
