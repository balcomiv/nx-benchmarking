import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestKUxNpComponent } from './test-k-ux-np.component';

describe('TestKUxNpComponent', () => {
  let component: TestKUxNpComponent;
  let fixture: ComponentFixture<TestKUxNpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestKUxNpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestKUxNpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
