import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOGTqbComponent } from './test-o-gtqb.component';

describe('TestOGTqbComponent', () => {
  let component: TestOGTqbComponent;
  let fixture: ComponentFixture<TestOGTqbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOGTqbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOGTqbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
