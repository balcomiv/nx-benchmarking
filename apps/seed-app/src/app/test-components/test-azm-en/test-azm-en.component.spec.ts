import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAzmENComponent } from './test-azm-en.component';

describe('TestAzmENComponent', () => {
  let component: TestAzmENComponent;
  let fixture: ComponentFixture<TestAzmENComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAzmENComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAzmENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
