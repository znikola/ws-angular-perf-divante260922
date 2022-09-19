import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../movie-model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss'],
})
export class MovieListPageComponent implements OnInit {
  movies: MovieModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['category']) {
        this.movieService
          .getMovieList(params['category'])
          .subscribe(({ results }) => (this.movies = results));
      } else {
        this.movieService
          .getMoviesByGenre(params['id'])
          .subscribe((movies) => (this.movies = movies));
      }
    });
  }
}
