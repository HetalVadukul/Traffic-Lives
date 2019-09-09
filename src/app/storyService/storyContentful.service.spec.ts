/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoryContentfulService } from './storyContentful.service';

describe('Service: StoryContentful', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryContentfulService]
    });
  });

  it('should ...', inject([StoryContentfulService], (service: StoryContentfulService) => {
    expect(service).toBeTruthy();
  }));
});
