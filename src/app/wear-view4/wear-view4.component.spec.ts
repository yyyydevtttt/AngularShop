import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearView4Component } from './wear-view4.component';

describe('WearView4Component', () => {
  let component: WearView4Component;
  let fixture: ComponentFixture<WearView4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearView4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearView4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
