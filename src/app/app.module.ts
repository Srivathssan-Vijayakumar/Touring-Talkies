import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { ReviewersComponent } from './components/reviewers/reviewers.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageComponent } from './components/language/language.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    ReviewersComponent,
    FooterComponent,
    LanguageComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
