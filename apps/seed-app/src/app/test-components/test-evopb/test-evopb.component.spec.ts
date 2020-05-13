import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEvopbComponent } from './test-evopb.component';

describe('TestEvopbComponent', () => {
  let component: TestEvopbComponent;
  let fixture: ComponentFixture<TestEvopbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEvopbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEvopbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
