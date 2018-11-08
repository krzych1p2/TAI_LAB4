import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConatctComponent } from './components/conatct/conatct.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes} from "@angular/router";
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import {ArticlesService} from "./articles.service";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ConatctComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/details/:id',
    component: BlogItemDetailComponent,
    data : {article : {
        title:"temp",
        text:"temp",
        image:"temp"
      }}
  }];


@NgModule({
  declarations: [
    AppComponent,
    ConatctComponent,
    QuizComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    SummaryPipe,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})


export class AppModule { }
