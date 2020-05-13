import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSxKCOComponent } from './test-sx-kco.component';

describe('TestSxKCOComponent', () => {
  let component: TestSxKCOComponent;
  let fixture: ComponentFixture<TestSxKCOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSxKCOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSxKCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
