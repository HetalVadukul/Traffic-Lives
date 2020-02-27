import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitUsComponent } from './submitUs/submitUs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { StoryContentfulService } from './storyService/storyContentful.service';
import { TestHealthComponent } from './Test-Health/Test-Health.component';

export const routes: Routes = [  {path: '', component: HomeComponent},
                                 {path: 'aboutUs', component: AboutUsComponent},
                                 {path: 'submitUs', component: SubmitUsComponent},
                                 {path: 'blogs', component: BlogsComponent},
                                 {path: 'health', component: TestHealthComponent},
                                 {path: 'stories', component: StoriesComponent}];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutUsComponent,
      SubmitUsComponent,
      BlogsComponent,
      StoriesComponent,
      TestHealthComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      RouterModule.forRoot(routes),
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      ReactiveFormsModule
   ],
   exports: [
      MatInputModule,
      MatSelectModule,
      MatButtonModule
   ],
   providers: [
      StoryContentfulService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
