import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMUnOhComponent } from './test-mun-oh.component';

describe('TestMUnOhComponent', () => {
  let component: TestMUnOhComponent;
  let fixture: ComponentFixture<TestMUnOhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMUnOhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMUnOhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
