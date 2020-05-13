import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLDKnVComponent } from './test-l-dkn-v.component';

describe('TestLDKnVComponent', () => {
  let component: TestLDKnVComponent;
  let fixture: ComponentFixture<TestLDKnVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLDKnVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLDKnVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
