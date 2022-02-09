import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { SearchDiscoveryComponent } from './search-discovery/search-discovery.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AlbumDetailComponent,
    EditPageComponent,
    SearchDiscoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
