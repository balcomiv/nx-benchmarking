import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOuBXNComponent } from './test-ou-bxn.component';

describe('TestOuBXNComponent', () => {
  let component: TestOuBXNComponent;
  let fixture: ComponentFixture<TestOuBXNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOuBXNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOuBXNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
