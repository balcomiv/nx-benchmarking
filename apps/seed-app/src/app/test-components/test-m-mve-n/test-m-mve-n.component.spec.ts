import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMMVeNComponent } from './test-m-mve-n.component';

describe('TestMMVeNComponent', () => {
  let component: TestMMVeNComponent;
  let fixture: ComponentFixture<TestMMVeNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMMVeNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMMVeNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
