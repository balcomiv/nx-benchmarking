import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPzNeFComponent } from './test-pz-ne-f.component';

describe('TestPzNeFComponent', () => {
  let component: TestPzNeFComponent;
  let fixture: ComponentFixture<TestPzNeFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPzNeFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPzNeFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
