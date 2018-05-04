import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ErrorDetailComponent } from './components/error-detail/error-detail.component';

const appRoutes: Route[] = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ErrorDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
