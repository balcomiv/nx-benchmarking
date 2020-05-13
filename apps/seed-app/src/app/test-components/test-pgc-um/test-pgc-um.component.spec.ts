import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPgcUmComponent } from './test-pgc-um.component';

describe('TestPgcUmComponent', () => {
  let component: TestPgcUmComponent;
  let fixture: ComponentFixture<TestPgcUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPgcUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPgcUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
