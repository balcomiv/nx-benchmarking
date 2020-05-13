import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYdZzpComponent } from './test-yd-zzp.component';

describe('TestYdZzpComponent', () => {
  let component: TestYdZzpComponent;
  let fixture: ComponentFixture<TestYdZzpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestYdZzpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYdZzpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
