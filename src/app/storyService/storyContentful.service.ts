import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Entry, createClient} from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class StoryContentfulService {

    private client = createClient({
      space: environment.contentful.spaceId,
      accessToken: environment.contentful.token
    });
constructor() { }

getStories(query?: object): Promise<Entry<any>[]> {
  return this.client.getEntries(Object.assign({
    content_type: 'tl'
  }, query))
    .then(res => res.items);
}

}
