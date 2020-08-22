import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment, ENV_PROVIDERS } from '../environments/environment';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ContentModule } from './content/content.module';
import { MaterialModule } from './material.module';
import { ScheduleModule } from './schedule/schedule.module';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: '', redirectTo: 'board', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, BoardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MaterialModule,
    ContentModule,
    ScheduleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
