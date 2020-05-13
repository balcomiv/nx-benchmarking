import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXQLOzComponent } from './test-xqloz.component';

describe('TestXQLOzComponent', () => {
  let component: TestXQLOzComponent;
  let fixture: ComponentFixture<TestXQLOzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXQLOzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXQLOzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
