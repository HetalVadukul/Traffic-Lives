import { Entry } from 'contentful';
import { StoryContentfulService } from './../storyService/storyContentful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Entry<any>[] = [];

  constructor(private storyContentfulService: StoryContentfulService) { }

  ngOnInit() {
    this.storyContentfulService.getStories()
      .then(stories => this.stories = stories);
  }

}
