import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKnKLvComponent } from './test-kn-klv.component';

describe('TestKnKLvComponent', () => {
  let component: TestKnKLvComponent;
  let fixture: ComponentFixture<TestKnKLvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKnKLvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKnKLvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
