import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHNFUxComponent } from './test-h-nfux.component';

describe('TestHNFUxComponent', () => {
  let component: TestHNFUxComponent;
  let fixture: ComponentFixture<TestHNFUxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHNFUxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHNFUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
