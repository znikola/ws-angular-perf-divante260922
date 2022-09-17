import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, startWith, switchMap } from 'rxjs';
import { TMDBMovieModel } from '../../shared/model/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-genre-page',
  templateUrl: './movie-genre-page.component.html',
  styleUrls: ['./movie-genre-page.component.scss'],
})
export class MovieGenrePageComponent {
  movies$: Observable<TMDBMovieModel[] | null> =
    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>
        this.movieService.getMoviesByGenre(id).pipe(startWith(null))
      )
    );

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}
}
