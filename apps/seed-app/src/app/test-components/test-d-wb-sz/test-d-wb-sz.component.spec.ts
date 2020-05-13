import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDWbSzComponent } from './test-d-wb-sz.component';

describe('TestDWbSzComponent', () => {
  let component: TestDWbSzComponent;
  let fixture: ComponentFixture<TestDWbSzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDWbSzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDWbSzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
