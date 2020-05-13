import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYzBdgComponent } from './test-yz-bdg.component';

describe('TestYzBdgComponent', () => {
  let component: TestYzBdgComponent;
  let fixture: ComponentFixture<TestYzBdgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestYzBdgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYzBdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
