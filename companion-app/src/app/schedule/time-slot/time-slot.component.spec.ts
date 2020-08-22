import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ScheduleService } from '../schedule.service';

import { TimeSlotComponent } from './time-slot.component';

describe('TimeSlotComponent', () => {
  let component: TimeSlotComponent;
  let fixture: ComponentFixture<TimeSlotComponent>;
  const service = jasmine.createSpyObj('ScheduleService', ['getSessionsPerTimeSlot']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSlotComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ScheduleService, useValue: service }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotComponent);
    component = fixture.componentInstance;
    component.timeSlot = { id: '0800-0830', slot: '08:00 - 08:30' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
