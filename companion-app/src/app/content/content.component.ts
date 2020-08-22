import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Content } from './content.model';
import { ContentService } from './content.service';

@Component({
  selector: 'bbv-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content$: Observable<Content>;

  constructor(private route: ActivatedRoute, private service: ContentService) {}

  ngOnInit() {
    this.content$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return this.service.getById(id);
      })
    );
  }

  speakers(content: Content): string {
    return content.speakers.join(', ');
  }
}
