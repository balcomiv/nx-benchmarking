import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWDogXComponent } from './test-w-dog-x.component';

describe('TestWDogXComponent', () => {
  let component: TestWDogXComponent;
  let fixture: ComponentFixture<TestWDogXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWDogXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWDogXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
