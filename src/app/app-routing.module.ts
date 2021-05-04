import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';
import { LanguageComponent } from './components/language/language.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: 'lan', component: MoviesComponent},
  {path: 'language', component: LanguageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
