import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSAapGComponent } from './test-s-aap-g.component';

describe('TestSAapGComponent', () => {
  let component: TestSAapGComponent;
  let fixture: ComponentFixture<TestSAapGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSAapGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSAapGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
