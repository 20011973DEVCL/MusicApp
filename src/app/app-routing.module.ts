import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'albums',
        loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
      },
      {
        path: 'singers',
        loadChildren: () => import('./singers/singers.module').then(m => m.SingersModule)
      },
      {
        path: 'music-genre',
        loadChildren: () => import('./music-genre/music-genre.module').then(m => m.MusicGenreModule) },
      {
        path: 'songs',
        loadChildren: () => import('./songs/songs.module').then(m => m.SongsModule) },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
