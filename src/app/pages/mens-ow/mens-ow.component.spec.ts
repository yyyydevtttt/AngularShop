import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensOwComponent } from './mens-ow.component';

describe('MensOwComponent', () => {
  let component: MensOwComponent;
  let fixture: ComponentFixture<MensOwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensOwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensOwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
