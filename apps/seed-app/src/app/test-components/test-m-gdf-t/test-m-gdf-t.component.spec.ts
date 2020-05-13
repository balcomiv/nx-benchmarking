import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMGdfTComponent } from './test-m-gdf-t.component';

describe('TestMGdfTComponent', () => {
  let component: TestMGdfTComponent;
  let fixture: ComponentFixture<TestMGdfTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMGdfTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMGdfTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
