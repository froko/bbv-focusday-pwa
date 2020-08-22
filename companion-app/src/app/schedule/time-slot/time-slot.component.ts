import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Session, TimeSlot } from '../schedule.model';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'bbv-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements AfterViewInit {
  // tslint:disable-next-line: no-input-rename
  @Input('time-slot') timeSlot: TimeSlot;

  sessions$: Observable<Session[]>;

  constructor(private router: Router, private service: ScheduleService) {}

  ngAfterViewInit() {
    this.sessions$ = this.service.getSessionsPerTimeSlot(this.timeSlot);
  }

  goToDetails(session: Session) {
    this.router.navigate(['content', session.id]);
  }
}
