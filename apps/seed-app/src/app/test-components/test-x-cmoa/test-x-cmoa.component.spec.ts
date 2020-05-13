import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestXCMoaComponent } from './test-x-cmoa.component';

describe('TestXCMoaComponent', () => {
  let component: TestXCMoaComponent;
  let fixture: ComponentFixture<TestXCMoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestXCMoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestXCMoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
