import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearView3Component } from './wear-view3.component';

describe('WearView3Component', () => {
  let component: WearView3Component;
  let fixture: ComponentFixture<WearView3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearView3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
