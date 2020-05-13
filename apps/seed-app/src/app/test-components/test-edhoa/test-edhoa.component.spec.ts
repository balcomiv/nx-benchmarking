import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEDhoaComponent } from './test-edhoa.component';

describe('TestEDhoaComponent', () => {
  let component: TestEDhoaComponent;
  let fixture: ComponentFixture<TestEDhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEDhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEDhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
