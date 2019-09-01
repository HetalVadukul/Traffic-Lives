import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitUsComponent } from './submitUs/submitUs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';


export const routes: Routes = [  {path: '', component: HomeComponent},
                                 {path: 'aboutUs', component: AboutUsComponent},
                                 {path: 'submitUs', component: SubmitUsComponent},
                                 {path: 'blogs', component: BlogsComponent},
                                 {path: 'stories', component: StoriesComponent}];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutUsComponent,
      SubmitUsComponent,
      BlogsComponent,
      StoriesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
