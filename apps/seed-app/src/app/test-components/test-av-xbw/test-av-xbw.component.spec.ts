import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAvXBWComponent } from './test-av-xbw.component';

describe('TestAvXBWComponent', () => {
  let component: TestAvXBWComponent;
  let fixture: ComponentFixture<TestAvXBWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAvXBWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAvXBWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
