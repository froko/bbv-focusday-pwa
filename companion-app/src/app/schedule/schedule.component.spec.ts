import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from './schedule.service';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;
  const service = jasmine.createSpyObj('ScheduleService', ['getTimeSlots']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ScheduleService, useValue: service }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
