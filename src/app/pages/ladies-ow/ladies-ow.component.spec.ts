import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesOwComponent } from './ladies-ow.component';

describe('LadiesOwComponent', () => {
  let component: LadiesOwComponent;
  let fixture: ComponentFixture<LadiesOwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesOwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesOwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
