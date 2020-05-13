import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSnyKQComponent } from './test-sny-kq.component';

describe('TestSnyKQComponent', () => {
  let component: TestSnyKQComponent;
  let fixture: ComponentFixture<TestSnyKQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSnyKQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSnyKQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
