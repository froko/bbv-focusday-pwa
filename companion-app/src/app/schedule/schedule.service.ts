import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Session, TimeSlot } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(
    @Inject('timeslotUrl') private timeslotUrl: string,
    @Inject('sessionUrl') private sessionUrl: string,
    private http: HttpClient
  ) {}

  getTimeSlots(): Observable<TimeSlot[]> {
    return this.http.get<any>(this.timeslotUrl).pipe(map((data) => data.timeslots));
  }

  getSessionsPerTimeSlot(timeSlot: TimeSlot): Observable<Session[]> {
    return this.http.get<any>(this.sessionUrl).pipe(
      map((data) => data.sessions.map((session: any) => new Session(session))),
      map((sessions: Session[]) => sessions.filter((session) => session.has(timeSlot)))
    );
  }
}
