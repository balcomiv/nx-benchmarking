import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZeMfjComponent } from './test-ze-mfj.component';

describe('TestZeMfjComponent', () => {
  let component: TestZeMfjComponent;
  let fixture: ComponentFixture<TestZeMfjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZeMfjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZeMfjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
