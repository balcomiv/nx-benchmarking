import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestZVyDaComponent } from './test-zvy-da.component';

describe('TestZVyDaComponent', () => {
  let component: TestZVyDaComponent;
  let fixture: ComponentFixture<TestZVyDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestZVyDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestZVyDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
