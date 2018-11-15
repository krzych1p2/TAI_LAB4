import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';	import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';	import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';	import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';	import { QuizComponent } from './components/quiz/quiz.component';
@@ -13,7 +12,11 @@ import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';	import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';	import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';	import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import {ArticlesService} from "./articles.service";	import {PostServiceService} from "./services/post-service.service";
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule,ReactiveFormsModule
} from '@angular/forms';
const appRoutes: Routes = [	const appRoutes: Routes = [
  {	  {
    @@ -55,13 +58,17 @@ const appRoutes: Routes = [
  BlogItemComponent,	    BlogItemComponent,
  BlogItemTextComponent,	    BlogItemTextComponent,
  BlogItemImageComponent,	    BlogItemImageComponent,
  BlogItemDetailComponent	    BlogItemDetailComponent,
  FilterPipe
],	  ],
imports: [	  imports: [
  BrowserModule,	    BrowserModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forRoot(appRoutes)	    RouterModule.forRoot(appRoutes)
],	  ],
providers: [ArticlesService],	  providers: [PostServiceService],
  bootstrap: [AppComponent]	  bootstrap: [AppComponent]
})	})



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
