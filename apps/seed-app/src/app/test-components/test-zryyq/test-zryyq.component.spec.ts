import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZRYyqComponent } from './test-zryyq.component';

describe('TestZRYyqComponent', () => {
  let component: TestZRYyqComponent;
  let fixture: ComponentFixture<TestZRYyqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZRYyqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZRYyqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
