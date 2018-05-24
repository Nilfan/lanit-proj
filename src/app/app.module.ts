import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HashtagService } from './hashtag.service';

import { AppComponent } from './app.component';
import { HashtagFormComponent } from './hashtag-form/hashtag-form.component';
import { HashtagListComponent } from './hashtag-list/hashtag-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HashtagFormComponent,
    HashtagListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HashtagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
