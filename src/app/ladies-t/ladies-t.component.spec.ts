import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesTComponent } from './ladies-t.component';

describe('LadiesTComponent', () => {
  let component: LadiesTComponent;
  let fixture: ComponentFixture<LadiesTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
