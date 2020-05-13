import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestICofvComponent } from './test-i-cofv.component';

describe('TestICofvComponent', () => {
  let component: TestICofvComponent;
  let fixture: ComponentFixture<TestICofvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestICofvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestICofvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
