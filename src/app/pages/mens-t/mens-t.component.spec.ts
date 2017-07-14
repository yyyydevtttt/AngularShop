import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensTComponent } from './mens-t.component';

describe('MensTComponent', () => {
  let component: MensTComponent;
  let fixture: ComponentFixture<MensTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
