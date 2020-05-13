import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWxQYaComponent } from './test-wx-qya.component';

describe('TestWxQYaComponent', () => {
  let component: TestWxQYaComponent;
  let fixture: ComponentFixture<TestWxQYaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWxQYaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWxQYaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
