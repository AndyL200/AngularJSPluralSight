import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { homeComponent } from './Home/home.component';
import { SiteHeaderComponent } from '_course-resources/site-header/site-header.component';
import { catalogComponent } from './catalog copy/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    SiteHeaderComponent,
    catalogComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
