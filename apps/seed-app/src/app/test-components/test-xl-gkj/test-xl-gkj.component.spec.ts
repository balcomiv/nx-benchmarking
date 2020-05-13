import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXlGKjComponent } from './test-xl-gkj.component';

describe('TestXlGKjComponent', () => {
  let component: TestXlGKjComponent;
  let fixture: ComponentFixture<TestXlGKjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXlGKjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXlGKjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
