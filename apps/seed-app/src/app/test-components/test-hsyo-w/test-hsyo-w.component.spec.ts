import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHsyoWComponent } from './test-hsyo-w.component';

describe('TestHsyoWComponent', () => {
  let component: TestHsyoWComponent;
  let fixture: ComponentFixture<TestHsyoWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHsyoWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHsyoWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
