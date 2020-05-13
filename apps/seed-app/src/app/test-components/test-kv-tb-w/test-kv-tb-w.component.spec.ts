import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKvTbWComponent } from './test-kv-tb-w.component';

describe('TestKvTbWComponent', () => {
  let component: TestKvTbWComponent;
  let fixture: ComponentFixture<TestKvTbWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKvTbWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKvTbWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
