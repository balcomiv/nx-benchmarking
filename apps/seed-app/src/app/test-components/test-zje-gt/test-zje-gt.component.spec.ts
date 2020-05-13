import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZjeGtComponent } from './test-zje-gt.component';

describe('TestZjeGtComponent', () => {
  let component: TestZjeGtComponent;
  let fixture: ComponentFixture<TestZjeGtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZjeGtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZjeGtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
