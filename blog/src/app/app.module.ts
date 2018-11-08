import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConatctComponent } from './components/components/conatct/conatct.component';
import { QuizComponent } from './components/components/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    ConatctComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
