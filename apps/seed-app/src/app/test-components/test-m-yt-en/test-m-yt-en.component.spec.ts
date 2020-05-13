import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMYtENComponent } from './test-m-yt-en.component';

describe('TestMYtENComponent', () => {
  let component: TestMYtENComponent;
  let fixture: ComponentFixture<TestMYtENComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMYtENComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMYtENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
