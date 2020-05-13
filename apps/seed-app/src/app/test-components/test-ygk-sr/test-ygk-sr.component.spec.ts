import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYgkSRComponent } from './test-ygk-sr.component';

describe('TestYgkSRComponent', () => {
  let component: TestYgkSRComponent;
  let fixture: ComponentFixture<TestYgkSRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestYgkSRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYgkSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
