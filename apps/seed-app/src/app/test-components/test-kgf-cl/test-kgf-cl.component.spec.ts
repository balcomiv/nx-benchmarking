import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKGfClComponent } from './test-kgf-cl.component';

describe('TestKGfClComponent', () => {
  let component: TestKGfClComponent;
  let fixture: ComponentFixture<TestKGfClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKGfClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKGfClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
