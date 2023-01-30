/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieviewComponent } from './movieview/movieview.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieviewComponent,
    MovielistComponent,
    MoviecardComponent,
    AddmovieComponent,
    EditmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieviewComponent } from './movieview/movieview.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    MoviecardComponent,
    MovieviewComponent,
    HeaderComponent,
    AddmovieComponent,
    EditmovieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}