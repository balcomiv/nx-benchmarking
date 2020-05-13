import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZYUiuComponent } from './test-zyuiu.component';

describe('TestZYUiuComponent', () => {
  let component: TestZYUiuComponent;
  let fixture: ComponentFixture<TestZYUiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZYUiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZYUiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
