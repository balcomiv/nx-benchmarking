import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOepfJComponent } from './test-oepf-j.component';

describe('TestOepfJComponent', () => {
  let component: TestOepfJComponent;
  let fixture: ComponentFixture<TestOepfJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOepfJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOepfJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
