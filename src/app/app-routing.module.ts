import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchDiscoveryComponent } from './search-discovery/search-discovery.component';


const routes: Routes = [
  { path: '' , component: HomePageComponent},
  { path: 'login' , component: LoginPageComponent},
  { path: 'add' , component: EditPageComponent},
  { path: 'edit/:id' , component: EditPageComponent},
  { path: 'detail/:id' , component: AlbumDetailComponent},
  { path: 'search', component: SearchDiscoveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
