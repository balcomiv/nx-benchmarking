import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMnNRWComponent } from './test-mn-nrw.component';

describe('TestMnNRWComponent', () => {
  let component: TestMnNRWComponent;
  let fixture: ComponentFixture<TestMnNRWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMnNRWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMnNRWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
