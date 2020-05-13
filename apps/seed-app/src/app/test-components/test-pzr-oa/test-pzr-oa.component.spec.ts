import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPZrOaComponent } from './test-pzr-oa.component';

describe('TestPZrOaComponent', () => {
  let component: TestPZrOaComponent;
  let fixture: ComponentFixture<TestPZrOaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPZrOaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPZrOaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
