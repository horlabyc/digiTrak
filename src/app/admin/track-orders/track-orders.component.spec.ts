import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOrdersComponent } from './track-orders.component';

describe('TrackOrdersComponent', () => {
  let component: TrackOrdersComponent;
  let fixture: ComponentFixture<TrackOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
