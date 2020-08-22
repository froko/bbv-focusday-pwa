import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';

describe('ScheduleService', () => {
  let service: ScheduleService;
  let http: HttpTestingController;

  const testEnvironmentProvider = [
    { provide: 'timeslotUrl', useValue: 'http://localhost:3000' },
    { provide: 'sessionUrl', useValue: 'http://localhost:3000' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScheduleService, testEnvironmentProvider]
    });

    service = TestBed.inject(ScheduleService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
