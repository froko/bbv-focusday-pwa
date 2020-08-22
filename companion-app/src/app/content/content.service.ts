import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Content } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(@Inject('sessionUrl') private sessionUrl: string, private http: HttpClient) {}

  getAll(): Observable<Content[]> {
    return this.http.get<any>(this.sessionUrl).pipe(
      map((data) => data.sessions),
      map((contents: Content[]) => contents.filter((content) => content.description !== ''))
    );
  }

  getById(id: string): Observable<Content> {
    return this.http.get<any>(this.sessionUrl).pipe(
      map((data) => data.sessions),
      map((contents: Content[]) => contents.find((content) => content.id === id))
    );
  }
}
