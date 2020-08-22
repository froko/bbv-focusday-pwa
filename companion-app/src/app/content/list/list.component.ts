import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Content } from '../content.model';
import { ContentService } from '../content.service';

@Component({
  selector: 'bbv-conent-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contents$: Observable<Content[]>;

  constructor(private service: ContentService) {}

  ngOnInit() {
    this.contents$ = this.service.getAll();
  }

  speakers(content: Content): string {
    return content.speakers.join(', ');
  }
}
