import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDRComponent } from './sdr.component';

describe('SDRComponent', () => {
  let component: SDRComponent;
  let fixture: ComponentFixture<SDRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
