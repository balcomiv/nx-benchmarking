import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXaJAzComponent } from './test-xa-jaz.component';

describe('TestXaJAzComponent', () => {
  let component: TestXaJAzComponent;
  let fixture: ComponentFixture<TestXaJAzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXaJAzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXaJAzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
