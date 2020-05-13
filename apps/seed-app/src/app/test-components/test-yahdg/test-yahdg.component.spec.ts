import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYAhdgComponent } from './test-yahdg.component';

describe('TestYAhdgComponent', () => {
  let component: TestYAhdgComponent;
  let fixture: ComponentFixture<TestYAhdgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestYAhdgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestYAhdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
