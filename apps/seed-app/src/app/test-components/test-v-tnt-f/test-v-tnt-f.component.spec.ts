import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVTntFComponent } from './test-v-tnt-f.component';

describe('TestVTntFComponent', () => {
  let component: TestVTntFComponent;
  let fixture: ComponentFixture<TestVTntFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestVTntFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVTntFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
