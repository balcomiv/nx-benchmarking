import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUitpaComponent } from './test-uitpa.component';

describe('TestUitpaComponent', () => {
  let component: TestUitpaComponent;
  let fixture: ComponentFixture<TestUitpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUitpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUitpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
