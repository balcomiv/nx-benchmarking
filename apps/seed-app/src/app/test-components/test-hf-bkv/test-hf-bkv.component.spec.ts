import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHfBKvComponent } from './test-hf-bkv.component';

describe('TestHfBKvComponent', () => {
  let component: TestHfBKvComponent;
  let fixture: ComponentFixture<TestHfBKvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHfBKvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHfBKvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
