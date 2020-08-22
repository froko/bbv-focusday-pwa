import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticScheduleComponent } from './static-schedule.component';

describe('StaticScheduleComponent', () => {
  let component: StaticScheduleComponent;
  let fixture: ComponentFixture<StaticScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StaticScheduleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
