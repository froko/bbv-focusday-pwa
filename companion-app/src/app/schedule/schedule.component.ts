import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ScheduleService } from './schedule.service';

@Component({
  selector: 'bbv-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  timeSlots$: Observable<any>;

  constructor(private service: ScheduleService) {}

  ngOnInit() {
    this.timeSlots$ = this.service.getTimeSlots();
  }
}
