import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPJjAzComponent } from './test-p-jj-az.component';

describe('TestPJjAzComponent', () => {
  let component: TestPJjAzComponent;
  let fixture: ComponentFixture<TestPJjAzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPJjAzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPJjAzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
