import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'content', component: ListComponent },
  { path: 'content/:id', component: ContentComponent }
];

@NgModule({
  declarations: [ContentComponent, ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ContentModule {}
