import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { StaticScheduleComponent } from './static-schedule/static-schedule.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';

const routes: Routes = [{ path: 'schedule', component: ScheduleComponent }];

@NgModule({
  declarations: [ScheduleComponent, TimeSlotComponent, StaticScheduleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ScheduleModule {}
