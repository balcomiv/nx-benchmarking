import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXYziWComponent } from './test-xyzi-w.component';

describe('TestXYziWComponent', () => {
  let component: TestXYziWComponent;
  let fixture: ComponentFixture<TestXYziWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXYziWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXYziWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
