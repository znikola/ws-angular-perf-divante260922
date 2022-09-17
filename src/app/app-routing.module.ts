import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list/:category',
    loadChildren: () =>
      import('./movie/movie-list-page/movie-list-page.module').then(
        (m) => m.MovieListPageModule
      ),
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('./movie/movie-detail-page/movie-detail-page.module').then(
        (file) => file.MovieDetailPageModule
      ),
  },
  {
    path: 'search/:query',
    loadChildren: () =>
      import('./movie/movie-search-page/movie-search-page.module').then(
        (file) => file.MovieSearchPageModule
      ),
  },
  {
    path: 'my-movies',
    loadChildren: () =>
      import('./movie/my-movie-list/my-movie-list.module').then(
        (file) => file.MyMovieListModule
      ),
  },
  {
    path: 'list/genre/:id',
    loadChildren: () =>
      import('./movie/movie-genre-page/movie-genre-page.module').then(
        (file) => file.MovieGenrePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'list/popular',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => {
      return import('./not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      );
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
