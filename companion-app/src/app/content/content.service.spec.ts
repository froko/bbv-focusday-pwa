import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContentService } from './content.service';

describe('ContentService', () => {
  const testEnvironmentProvider = { provide: 'sessionUrl', useValue: 'http://localhost:3000' };

  let service: ContentService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContentService, testEnvironmentProvider]
    });

    service = TestBed.inject(ContentService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
